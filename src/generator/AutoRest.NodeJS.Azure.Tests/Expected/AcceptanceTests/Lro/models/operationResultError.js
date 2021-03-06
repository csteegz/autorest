/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the OperationResultError class.
 * @constructor
 * @member {number} [code] The error code for an operation failure
 *
 * @member {string} [message] The detailed arror message
 *
 */
function OperationResultError() {
}

/**
 * Defines the metadata of OperationResultError
 *
 * @returns {object} metadata of OperationResultError
 *
 */
OperationResultError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'OperationResult_error',
    type: {
      name: 'Composite',
      className: 'OperationResultError',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'Number'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = OperationResultError;
