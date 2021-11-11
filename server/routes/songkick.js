var express = require("express");
var router = express.Router();
const https = require("https");

const API_KEY = process.env.SONGKICK_KEY;

router.get("/artists/:query", function (req, res, next) {
  console.log(API_KEY)
  var userInput = req.params.query.replace(/ /g, "&");
  const options = {
    hostname: "api.songkick.com",
    port: 443,
    path: "/api/3.0/search/artists.json?",
    method: "GET",
  };

  str =
    "apikey=" + API_KEY + "&query=" + userInput + "&page=1" + "&per_page=50";

  options.path += str;

  const songkickReq = https.request(options, (songKickRes) => {
    var body = [];
    songKickRes.on("data", (d) => {
      body.push(d);
    });
    songKickRes.on("end", () => {
      const bodyString = body.join("");
      const rsp = JSON.parse(bodyString);
      var ARTIST_LIST = null;
    
        if (rsp.resultsPage.results && rsp.resultsPage.results.artist) {
          ARTIST_LIST = rsp.resultsPage.results;
        }
  
        if (ARTIST_LIST) {
          res.status(200).send(ARTIST_LIST);
        }
       else {
        res.status(405).send({
          response: {
            error: true,
            message: "No results",
          },
        });
      }
    });
  });

  songkickReq.on("error", (error) => {
    console.error(error);
  });

  songkickReq.end();
});

router.get("/pastGig/:query", function (req, res, next) {
  const options = {
    hostname: "api.songkick.com",
    port: 443,
    path: `/api/3.0/artists/${req.params.query}/gigography.json?apikey=${API_KEY}&per_page=50&order=desc`,
    method: "GET",
  };

  const Request = https.request(options, (songKickRes) => {
    var body = [];
    songKickRes.on("data", (d) => {
      body.push(d);
    });

    songKickRes.on("end", () => {
      const bodyString = body.join("");
      const rsp = JSON.parse(bodyString);
      if (rsp.resultsPage.totalEntries <= 0) {
        res.sendStatus(405);
      } else {
        res.status(200).send(rsp);
      }
    });
  });

  Request.on("error", (error) => {
    console.error(error);
  });

  Request.end();
});

module.exports = router;



const ResponseExample = {
  resultsPage: {
    results: {
      event: [
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012) TEST 1",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: 153.021072,
            lat: -27.470125,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "San Francisco, CA, US",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
        {
          id: 11129128,
          type: "Concert",
          uri: "http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          displayName: "Wild Flag at The Fillmore (April 18, 2012)",
          start: {
            time: "20:00:00",
            date: "2012-04-18",
            datetime: "2012-04-18T20:00:00-0800",
          },
          performance: [
            {
              artist: {
                id: 29835,
                uri: "http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                displayName: "Wild Flag",
                identifier: [],
              },
              id: 21579303,
              displayName: "Wild Flag",
              billingIndex: 1,
              billing: "headline",
            },
          ],
          location: {
            city: "Australia",
            lng: -122.4332937,
            lat: 37.7842398,
          },
          venue: {
            id: 6239,
            displayName: "The Fillmore",
            uri: "http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
            lng: -122.4332937,
            lat: 37.7842398,
            metroArea: {
              id: 26330,
              uri: "http://www.songkick.com/metro-areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
              displayName: "SF Bay Area",
              country: { displayName: "US" },
              state: { displayName: "CA" },
            },
          },
          status: "ok",
          popularity: 0.012763,
        },
      ],
    },
    totalEntries: 24,
    perPage: 50,
    page: 1,
    status: "ok",
  },
};
