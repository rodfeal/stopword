/*
Copyright (c) 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// This list is frequency sorted. That means it can be sliced from the bottom
// and be less agressive in excluding stopwords */

const swa = ['na', 'ya', 'wa', 'kwa', 'ni', 'za', 'katika', 'la', 'kuwa', 'kama', 'kwamba', 'cha', 'hiyo', 'lakini', 'yake', 'hata', 'wakati', 'hivyo', 'sasa', 'wake', 'au', 'watu', 'hii', 'zaidi', 'vya', 'huo', 'tu', 'kwenye', 'si', 'pia', 'ili', 'moja', 'kila', 'baada', 'ambao', 'ambayo', 'yao', 'wao', 'kuna', 'hilo', 'kutoka', 'kubwa', 'pamoja', 'bila', 'huu', 'hayo', 'sana', 'ndani', 'mkuu', 'hizo', 'kufanya', 'wengi', 'hadi', 'mmoja', 'hili', 'juu', 'kwanza', 'wetu', 'kuhusu', 'baadhi', 'wote', 'yetu', 'hivi', 'kweli', 'mara', 'wengine', 'nini', 'ndiyo', 'zao', 'kati', 'hao', 'hapa', 'kutokana', 'muda', 'habari', 'ambaye', 'wenye', 'nyingine', 'hakuna', 'tena', 'hatua', 'bado', 'nafasi', 'basi', 'kabisa', 'hicho', 'nje', 'huyo', 'vile', 'yote', 'mkubwa', 'alikuwa', 'zote', 'leo', 'haya', 'huko', 'kutoa', 'mwa', 'kiasi', 'hasa', 'nyingi', 'kabla', 'wale', 'chini', 'gani', 'hapo', 'lazima', 'mwingine', 'bali', 'huku', 'zake', 'ilikuwa', 'tofauti', 'kupata', 'mbalimbali', 'pale', 'kusema', 'badala', 'wazi', 'yeye', 'alisema', 'hawa', 'ndio', 'hizi', 'tayari', 'wala', 'muhimu', 'ile', 'mpya', 'ambazo', 'dhidi', 'kwenda', 'sisi', 'kwani', 'jinsi', 'binafsi', 'kutumia', 'mbili', 'mbali', 'kuu', 'mengine', 'mbele', 'namna', 'mengi', 'upande']
export { swa }
