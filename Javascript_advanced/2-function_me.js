#!/usr/bin/node
/**
 * 2. Closure
 */

function welcomeMessage(fullName) {
    return function () {
      alert('Welcome ' + fullName);
    };
  }
  
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');

  
// Test the closures
guillaume(); // This will display "Welcome Guillaume" in an alert
alex();      // This will display "Welcome Alex" in an alert
fred();      // This will display "Welcome Fred" in an alert  