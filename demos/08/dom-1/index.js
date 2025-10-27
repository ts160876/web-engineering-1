"use strict";

console.log("=== Processing all nodes ===");
processNode(document, 0);

function processNode(node, level) {
  const tinfNode = new TinfNode(node);
  console.log(
    `${getIndentation(level)}Node ${tinfNode.nodeName} of type ${getText(
      tinfNode.nodeType
    )} and value ${tinfNode.nodeValue}`
  );
  //Process attributes; remark: attribute nodes are no children
  if (tinfNode.attributes != null) {
    for (let i = 0; i < tinfNode.attributes.length; i++) {
      const tinfAttributeNode = new TinfNode(tinfNode.attributes[i]);
      console.log(
        `${getIndentation(level + 1)}Node ${
          tinfAttributeNode.nodeName
        } of type ${getText(tinfAttributeNode.nodeType)} and value ${
          tinfAttributeNode.nodeValue
        }`
      );
    }
  }
  //Process children
  if (node.childNodes != null) {
    node.childNodes.forEach((childNode) => {
      processNode(childNode, level + 1);
    });
  }
}

//Simplify the node
function TinfNode(node) {
  this.nodeName = node.nodeName;
  this.nodeType = node.nodeType;
  this.nodeValue = node.nodeValue;
  this.childNodes = node.childNodes;
  this.attributes = node.attributes;
  this.hiearchy = [];

  buildHierarchy(this, node.__proto__);
}

//Build the class hierarchy
function buildHierarchy(tinfNode, proto) {
  tinfNode.hiearchy.push(proto.constructor);
  if (proto.constructor != Object) {
    buildHierarchy(tinfNode, proto.__proto__);
  }
}

//Function to determine indentation
function getIndentation(level) {
  let intendation = "";
  for (let i = 1; i <= level; i++) {
    intendation = intendation + "-";
  }
  return intendation;
}

//Convert numerical type to text
function getText(nodeType) {
  switch (nodeType) {
    case Node.DOCUMENT_NODE:
      return "DOCUMENT_NODE";
    case Node.ELEMENT_NODE:
      return "ELEMENT_NODE";
    case Node.TEXT_NODE:
      return "TEXT_NODE";
    case Node.ATTRIBUTE_NODE:
      return "ATTRIBUTE_NODE";
    case Node.COMMENT_NODE:
      return "COMMENT_NODE";
    case Node.DOCUMENT_TYPE_NODE:
      return "DOCUMENT_TYPE_NODE";
    default:
      return nodeType;
  }
}
