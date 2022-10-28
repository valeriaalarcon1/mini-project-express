const diagnostics = require('express').Router();
const diagnosticsFile = require('../db/diagnostics.json');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  res.json(diagnosticsFile);
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const newDiagnostic = req.body;
  // add updated object ot notes array
  diagnosticsFile.push(newDiagnostic);

  // updated db.json file
    // FileSystem.writeFile('../db/diagnostics.json', JSON.stringify(diagnosticsFile, null, 2), (err) =>
    // err ? console.error(err) : console.info(`New diagnositc has been written to json file`)
    // );
  readAndAppend(req.body, './db/diagnostics.json');
  res.status(200);
});

module.exports = diagnostics;
