// == BSD2 LICENSE ==
// Copyright (c) 2014, Tidepool Project
//
// This program is free software; you can redistribute it and/or modify it under
// the terms of the associated License, which is identical to the BSD 2-Clause
// License as published by the Open Source Initiative at opensource.org.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE. See the License for more details.
//
// You should have received a copy of the License along with this program; if
// not, you can obtain one from Tidepool Project at tidepool.org.
// == BSD2 LICENSE ==

'use strict';

var group =
  {
    id:'7234',
    members : ['1','2','3','6']
  };

var groups = [
  {
    id:'7234',
    members : ['1','2','3','6']
  },
  {
    id:'4456',
    members : ['1','2']
  }
];

module.exports = function(options, cb) {

    var res = {
      statusCode : 200
    };

    if(options.url.indexOf('membership/userId/member') !== -1){
      return cb(null,res,JSON.stringify(groups));
    }else if(options.url.indexOf('groupId/members') !== -1){
      return cb(null,res,JSON.stringify(group));
    }

  };