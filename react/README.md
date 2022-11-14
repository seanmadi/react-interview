# React Technical Interview

## Example project

An example project of a potential solution to the below instructions is located in the `example_project` directory.

## Instructions

1. Create a new create-react-app project

2. Request data from this endpoint [https://api.fda.gov/device/recall.json?search=&limit=5](https://api.fda.gov/device/recall.json?search=&limit=5) and store the `results` data as a single object, where each property's key is a result's `res_event_number`
  **This shows the candidate's ability to "data munge".**
  **Also shows whether the candidate can figure out how `this` works.**

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
  **This shows how a candidate creates components.**
  **Is the candidate passing the whole `device` as a prop, or `device_name` and `date_terminated` separately?**
  **Extra points for using propTypes.**

5. Add another column to the table with nothing in the table head (blank). Add a **delete** button to each row, and have clicking that button remove that row from the table (remove that device from the state).
  **This shows the candidate's ability to `setState` and pass callback functions through props. Also show's their ability to bind methods.**

6. Sort the Devices by `date_terminated` (assume that sorting alphabetically will not accomplish this)
  **This shows the candidate's ability to either use Javascript's Date library, or their ability to use an npm package like Moment.js. The javascript sort function takes a parameter, so this can also test their knowledge of functions as parameters.**

7. Add a search field and submit button in order to filter your search of the api. Use the `search` parameter in the url.
  **this shows the candidate's ability to use form fields in conjunction with a network request.**

*TODO:*
- Find another API to use that allows the ability to create/delete/edit records, as this is an important part of a real-world application.
