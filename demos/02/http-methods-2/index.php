<?php
const FILE_NAME = "authors.json";

function readAuthorFile(): array
{
    $content = file_get_contents(FILE_NAME);
    return json_decode($content, true);
}

function writeAuthorFile(array $authors)
{
    $content = json_encode($authors);
    file_put_contents(FILE_NAME, $content);
}

function determineNextId(array $authors): int
{
    $maxId = 0;
    foreach ($authors as $author) {
        if ($author["author_id"] > $maxId) {
            $maxId = $author["author_id"];
        }
    }
    return ++$maxId;
}

function getIndex(array $authors, int $id): int|null
{
    $index = null;
    foreach ($authors as $key => $author) {
        if ($author["author_id"] === $id) {
            $index = $key;
            break;
        };
    }
    return $index;
}

function getRoute(): string
{
    return substr($_SERVER['REQUEST_URI'], strlen($_SERVER['SCRIPT_NAME']));
}

function isRouteValid(string $route): bool
{
    if (str_starts_with($route, "/authors")) {
        return true;
    } else {
        return false;
    }
}

function getIdFromRoute(string $route): int|null
{
    $parts = explode("/", $route);
    if (isset($parts[2]) && is_numeric($parts[2])) {
        return $parts[2];
    } else {
        return null;
    }
}

function getBody(): array
{
    $content = file_get_contents("php://input");
    $decodedContent = json_decode($content, true);
    if (is_array($decodedContent)) {
        return $decodedContent;
    } else {
        return [];
    }
}

function handleGetAndHead(array $authors, int|null $id)
{
    if ($id === null) {
        //List all authors
        header('Content-Type: application/json');
        http_response_code(200);
        if ($_SERVER['REQUEST_METHOD'] !== "HEAD") {
            echo json_encode($authors);
        }
    } else {
        //List one author
        $index = getIndex($authors, $id);
        if ($index !== null) {
            header('Content-Type: application/json');
            http_response_code(200);
            if ($_SERVER['REQUEST_METHOD'] !== "HEAD") {
                echo json_encode(($authors[$index]));
            }
        } else {
            http_response_code(404);
        }
    }
}

function handleOptions(int|null $id)
{
    if ($id === null) {
        header('Allow: GET, POST, OPTIONS');
        http_response_code(200);
    } else {
        header('Allow: GET, PUT, DELETE, OPTIONS');
        http_response_code(200);
    }
}

function handlePost(array &$authors, int|null $id)
{
    if ($id === null) {
        $body = getBody();
        if (isset($body["first_name"]) && isset($body["first_name"])) {
            http_response_code(201);
            array_push($authors, [
                "author_id" => determineNextId($authors),
                "first_name" => $body["first_name"],
                "last_name" => $body["last_name"]
            ]);
        } else {
            http_response_code(400);
        }
    } else {
        http_response_code(405);
    }
}

function handlePut(array &$authors, int|null $id)
{
    if ($id !== null) {
        $index = getIndex($authors, $id);
        if ($index !== null) {
            $body = getBody();
            if (isset($body["first_name"]) && isset($body["first_name"])) {
                http_response_code(204);
                $authors[$index]["first_name"] = $body["first_name"];
                $authors[$index]["last_name"] = $body["last_name"];
            } else {
                http_response_code(400);
            }
        } else {
            http_response_code(404);
        }
    } else {
        http_response_code(405);
    }
}

function handleDelete(array &$authors, int|null $id)
{
    if ($id !== null) {
        $index = getIndex($authors, $id);
        if ($index !== null) {
            http_response_code(204);
            unset($authors[$index]);
        } else {
            http_response_code(404);
        }
    } else {
        http_response_code(405);
    }
}

$authors = readAuthorFile();
$route = getRoute();

if (isRouteValid($route)) {

    switch ($_SERVER['REQUEST_METHOD']) {
        case "GET":
        case "HEAD":
            handleGetAndHead($authors, getIdFromRoute($route));
            break;
        case "OPTIONS":
            handleOptions(getIdFromRoute($route));
            break;
        case "POST":
            handlePost($authors, getIdFromRoute($route));
            break;
        case "PUT":
            handlePut($authors, getIdFromRoute($route));
            break;
        case "DELETE":
            handleDelete($authors, getIdFromRoute($route));
            break;
    }
    writeAuthorFile($authors);
} else {
    http_response_code(400);
}
