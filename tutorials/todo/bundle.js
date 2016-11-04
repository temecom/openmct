/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2016, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/
/*global define*/

define([
    'legacyRegistry',
    './src/controllers/TodoController'
], function (legacyRegistry,TodoController) {
    "use strict";
    legacyRegistry.register("tutorials/todo", {
        "name": "To-do Plugin",
        "description": "Allows creating and editing to-do lists.",
        "extensions":
        {
           "types": [
              {
                 "key": "example:todo",
                  "name": "To Do List",
                  "cssclass": "icon-check",
                  "description": "A list of things that need to be done.",
                  "features": "creation",
                  "model": {
                     "tasks": [
                         { "description": "Add a type", "completed": true },
                         { "description": "Add a view" }
                     ]
                  }
              }
           ],
           "views": [
                   {
                       "key": "example.todo",
                       "type": "example.todo",
                       "cssclass": "icon-check",
                       "name": "List",
                       "templateUrl": "templates/todo.html",
                       "editable": true
                   }
               ],
           "controllers": [
                {
                    "key": "TodoController",
                    "implementation": TodoController,
                   "depends": [ "$scope", "dialogService" ]
                }
           ]
       }
    });
});