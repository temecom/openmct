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

    '../src/adapter/bundle',
    '../src/api/objects/bundle',

    '../example/builtins/bundle',
    '../example/composite/bundle',
    '../example/eventGenerator/bundle',
    '../example/export/bundle',
    '../example/extensions/bundle',
    '../example/forms/bundle',
    '../example/generator/bundle',
    '../example/identity/bundle',
    '../example/imagery/bundle',
    '../example/mobile/bundle',
    '../example/msl/bundle',
    '../example/notifications/bundle',
    '../example/persistence/bundle',
    '../example/plotOptions/bundle',
    '../example/policy/bundle',
    '../example/profiling/bundle',
    '../example/scratchpad/bundle',
    '../example/taxonomy/bundle',
    '../example/worker/bundle',
    '../example/localTimeSystem/bundle',
    '../platform/commonUI/about/bundle',
    '../platform/commonUI/browse/bundle',
    '../platform/commonUI/dialog/bundle',
    '../platform/commonUI/edit/bundle',
    '../platform/commonUI/formats/bundle',
    '../platform/commonUI/general/bundle',
    '../platform/commonUI/inspect/bundle',
    '../platform/commonUI/mobile/bundle',
    '../platform/commonUI/notification/bundle',
    '../platform/commonUI/regions/bundle',
    '../platform/commonUI/themes/espresso/bundle',
    '../platform/commonUI/themes/snow/bundle',
    '../platform/containment/bundle',
    '../platform/core/bundle',
    '../platform/entanglement/bundle',
    '../platform/execution/bundle',
    '../platform/exporters/bundle',
    '../platform/features/clock/bundle',
    '../platform/features/conductor/bundle',
    '../platform/features/fixed/bundle',
    '../platform/features/conductor-v2/conductor/bundle',
    '../platform/features/conductor-v2/compatibility/bundle',
    '../platform/features/conductor-v2/utcTimeSystem/bundle',
    '../platform/features/imagery/bundle',
    '../platform/features/layout/bundle',
    '../platform/features/my-items/bundle',
    '../platform/features/pages/bundle',
    '../platform/features/plot/bundle',
    '../platform/features/static-markup/bundle',
    '../platform/features/table/bundle',
    '../platform/features/timeline/bundle',
    '../platform/forms/bundle',
    '../platform/framework/bundle',
    '../platform/framework/src/load/Bundle',
    '../platform/identity/bundle',
    '../platform/persistence/aggregator/bundle',
    '../platform/persistence/couch/bundle',
    '../platform/persistence/elastic/bundle',
    '../platform/persistence/local/bundle',
    '../platform/persistence/queue/bundle',
    '../platform/policy/bundle',
    '../platform/representation/bundle',
    '../platform/search/bundle',
    '../platform/status/bundle',
    '../platform/telemetry/bundle',
    '../tutorials/todo/bundle'
], function (legacyRegistry) {

    var DEFAULTS = [
        'src/adapter',
        'src/api/objects',
        'platform/framework',
        'platform/core',
        'platform/representation',
        'platform/commonUI/about',
        'platform/commonUI/browse',
        'platform/commonUI/edit',
        'platform/commonUI/dialog',
        'platform/commonUI/formats',
        'platform/commonUI/general',
        'platform/commonUI/inspect',
        'platform/commonUI/mobile',
        'platform/commonUI/themes/espresso',
        'platform/commonUI/notification',
        'platform/containment',
        'platform/execution',
        'platform/exporters',
        'platform/telemetry',
        'platform/features/clock',
        'platform/features/fixed',
        'platform/features/imagery',
        'platform/features/layout',
        'platform/features/pages',
        'platform/features/plot',
        'platform/features/timeline',
        'platform/features/table',
        'platform/forms',
        'platform/identity',
        'platform/persistence/aggregator',
        'platform/persistence/local',
        'platform/persistence/queue',
        'platform/policy',
        'platform/entanglement',
        'platform/search',
        'platform/status',
        'platform/commonUI/regions'
    ];

    DEFAULTS.forEach(function (bundlePath) {
        legacyRegistry.enable(bundlePath);
    });

    return legacyRegistry;
});
