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
define([
    'legacyRegistry',
    './src/YAMCSTelemetryAdapter',
    './src/YAMCSTelemetryInitializer',
    './src/YAMCSTelemetryModelProvider'
], function (
    legacyRegistry,
    YAMCSTelemetryAdapter,
    YAMCSTelemetryInitializer,
    YAMCSTelemetryModelProvider
) {
    legacyRegistry.register("yamcs/adapter", {
        "name": "YAMCS Telemetry Adapter",
        "extensions": {
            "types": [
                {
                    "name": "YAMCS Data",
                    "key": "yamcs",
                    "cssclass": "icon-telemetry"
                },
                 {
                     "name": "Subsystem",
                     "key": "yamcs.subsystem",
                     "cssclass": "icon-telemetry",
                     "model": { "composition": [] }
                 },
                 {
                     "name": "Measurement",
                     "key": "yamcs.measurement",
                     "cssclass": "icon-telemetry",
                     "model": { "telemetry": {} },
                     "telemetry": {
                         "source": "yamcs.source",
                         "domains": [
                             {
                                 "name": "Time",
                                 "key": "timestamp"
                             }
                         ]
                     }
                 }
            ],
            "roots": [
                {
                    "id": "yamcs:sc",
                    "priority": "preferred",
                    "model": {
                        "type": "yamcs",
                        "name": "YAMCS Data",
                        "composition": []
                    }
                }
            ],
             "services": [
             {
                 "key": "yamcs.adapter",
                 "implementation": YAMCSTelemetryAdapter,
                 "depends": ["$q", "YAMCS_SERVICE_CONFIG"]
             }
             ],
             "constants": [
             {
                 "key": "YAMCS_SERVICE_CONFIG",
                 "priority": "fallback",
                 "value": {
                    host: "localhost",
                    port:"8091",
                    wsScheme: "ws",
                    restScheme: "http",
                    instance: "simulator"
                    }
             }
             ],
             "runs": [
             {
                 "implementation": YAMCSTelemetryInitializer,
                 "depends": [ "yamcs.adapter", "objectService" ]
             }
             ],
             "components": [
             {
                 "provides": "modelService",
                 "type": "provider",
                 "implementation": YAMCSTelemetryModelProvider,
                 "depends": [ "yamcs.adapter", "$q" ]
             }
             ]
        }
    });
});