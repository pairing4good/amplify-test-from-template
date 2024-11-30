import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Owner: a
    .model({
      firstName: a.string().required(),
      lastName: a.string().required(),
      addressLine1: a.string().required(),
      addressLine2: a.string(),
      city: a.string().required(),
      state: a.string().required(),
      zip: a.string().required(),
      phone: a.string(),
      email: a.string(),
      pets: a.hasMany('Pet', 'petId')
    })
    .authorization((allow) => [allow.guest()]),

  Pet: a
    .model({
      name: a.string().required(),
      dateOfBirth: a.date().required(),
      inTraining: a.boolean(),
      owner: a.belongsTo('Owner', 'ownerId'),
      trainings: a.hasMany('Training', 'trainingId')
    })
    .authorization((allow) => [allow.guest()]),

  Training: a
    .model({
      location: a.string().required(),
      objective: a.string(),
      startDate: a.date().required(),
      endDate: a.date(),
      pet: a.belongsTo('Pet', 'petId'),
      activityLogs: a.hasMany('ActivityLog', 'activityLogId')
    })
    .authorization((allow) => [allow.guest()]),

  ActivityLog: a
    .model({
      date: a.datetime().required(),
      notes: a.string(),

      bell: a.integer(),
      pee_outside: a.integer(),
      poop_outside: a.integer(),
      no_bell: a.integer(),
      pee_inside: a.integer(),
      poop_inside: a.integer(),

      sit: a.integer(),
      stay: a.integer(),
      down: a.integer(),
      not_sit: a.integer(),
      not_stay: a.integer(),
      not_down: a.integer(),

      come: a.integer(),
      crate: a.integer(),
      walk: a.integer(),
      not_come: a.integer(),
      not_crate: a.integer(),
      not_walk: a.integer(),

      off: a.integer(),
      no_chewing: a.integer(),
      good_experience: a.integer(),
      jumping: a.integer(),
      chewing: a.integer(),
      bad_experience: a.integer(),

      socialize: a.integer(),
      no_barking: a.integer(),
      sleep: a.integer(),
      not_socialize: a.integer(),
      bark: a.integer(),
      not_sleep: a.integer(),

      training: a.belongsTo('Training', 'trainingId')
    })
    .authorization((allow) => [allow.guest()]),
});


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
