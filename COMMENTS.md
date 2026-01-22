<!-- Project Comments Go Here -->

If I had a bit more time I would have added the following

Added pagination to:
- limit number of DOM elements (Only 5 application cards rendered at once)
- Nicer user experience as user has less content to scroll through. Though aware loading and navigating through each page is not the best experience. Would have personally removed the load data button all together and on  pagination button click would have fetched the next rows and navigated at the same time

Error handling:
- Would have added in better error handling for when fetching the data
- would have sanitised the data a bit more if there were chance of nulls but fetching the data a few times from the api ensures that the data was always populated and so I didn't need to make any of the Application interface properties optional(?)

Testing:
- Would have added in a test for the pagnination component
- Would have installed playwight and created 1 end to end test

- Styling
- would have also added blue styling to email and made company and name bold text