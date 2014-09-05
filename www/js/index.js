/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var db = window.openDatabase("hunterpedia", "1.0", "hunterpedia", 1000000);
        db.transaction(populateDB, errorCB, successCB);
        function populateDB(tx) {
            tx.executeSql('DROP TABLE IF EXISTS MONSTER');
            tx.executeSql('CREATE TABLE IF NOT EXISTS MONSTER (id unique, name, type, weakness)');
            tx.executeSql('INSERT INTO MONSTER (id, name, type, weakness) VALUES (1, "Rathalos", "Flying Wyvern", "Ice")');
            tx.executeSql('INSERT INTO MONSTER (id, name, type, weakness) VALUES (2, "Rathian", "Flying Wyvern", "Thunder")');
        }

        function errorCB(err) {
            alert("Error processing SQL: " + err);
        }

        function successCB() {
            alert("SUCCESS!!!");
        }
    }
};
