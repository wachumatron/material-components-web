/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings = {
  INTERACTION_EVENT: 'MDCChip:interaction',
  SELECTION_CHANGE_EVENT: 'MDCChip:selectionChange',
  ANIMATION_END_EVENT: 'MDCChip:animationEnd',
};

/** @enum {string} */
const cssClasses = {
  // TODO: move selectors to strings
  TEXT_SELECTOR: '.mdc-chip__text',
  CLOSE_ICON_SELECTOR: '.mdc-chip__icon--close',
  EXIT: 'mdc-chip--exit',
  WITH_LEADING_ICON: 'mdc-chip--with-leading-icon',
}

export {strings, cssClasses};
