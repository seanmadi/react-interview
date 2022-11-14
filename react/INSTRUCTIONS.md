## Interview Instructions

1. Create a new create-react-app project

2. Request data from this endpoint [https://api.fda.gov/device/recall.json?search=&limit=5](https://api.fda.gov/device/recall.json?search=&limit=5) and store the `results` data as a single object, where each property's key is a result's `res_event_number`

  ```javascript
  // example
  {
    "47369": {
      "other_submission_description": ...,
      "res_event_number": "47369",
      "firm_fei_number": ...,
      ...,
    },
    ...,
  }
  ```

3. Render a table with the columns *Device Name* and *Date Terminated*.

4. Render each result in thet table as it's own component called `Device`. `Device` should display the `openfda.device_name` and the `event_date_terminated`.

5. Add another column to the table with nothing in the table head (blank). Add a **delete** button to each row, and have clicking that button remove that row from the table (remove that device from the state).

6. Sort the Devices by `date_terminated` (assume that sorting alphabetically will not accomplish this)
