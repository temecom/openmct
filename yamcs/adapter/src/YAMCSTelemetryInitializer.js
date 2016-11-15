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

define(
    function () {
        "use strict";

        var TAXONOMY_ID = "yamcs:sc",
            PREFIX = "yamcs_tlm:";

        function YAMCSTelemetryInitializer(adapter, objectService) {
            // Generate a domain object identifier for a dictionary element
            function makeId(element) {
                return PREFIX + element.identifier;
            }

            // When the dictionary is available, add all subsystems
            // to the composition of My Spacecraft
            function initializeTaxonomy(dictionary) {
                // Get the top-level container for dictionary objects
                // from a group of domain objects.
                function getTaxonomyObject(domainObjects) {
                    return domainObjects[TAXONOMY_ID];
                }

                // Populate
                function populateModel(taxonomyObject) {
                    return taxonomyObject.useCapability(
                        "mutation",
                        function (model) {
                            model.name =
                                dictionary.name;
                            model.composition =
                                dictionary.subsystems.map(makeId);
                        }
                    );
                }

                // Look up My Spacecraft, and populate it accordingly.
                objectService.getObjects([TAXONOMY_ID])
                    .then(getTaxonomyObject)
                    .then(populateModel);
            }

            adapter.dictionary().then(initializeTaxonomy);
        }

        return YAMCSTelemetryInitializer;
    }
);