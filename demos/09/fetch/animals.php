<?php
//Path to animals.json file
$jsonFile = 'animals.json';
//Random number. On average every fifth request should give an error 
$random = rand(1, 30);

// Check if file exists
if ($random > 20) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(["error" => "Server Error"]);
    exit;
} else {
    //Wait between 1 and 20 seconds
    sleep($random);
    // Read the file contents
    $jsonData = file_get_contents($jsonFile);

    // Set content type and return the data
    header('Content-Type: application/json');
    echo $jsonData;
}
