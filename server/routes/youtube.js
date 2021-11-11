var express = require("express");
var router = express.Router();
const { google } = require("googleapis");

const API_KEY = "AIzaSyA92KsNjJI-BTNt8XvSCLUAcpUWG-x5w0I";
const MAX = 10;

router.get("/:query", function (req, res, next) {

  google
    .youtube("v3")
    .search.list({
      key: API_KEY,
      part: "snippet",
      q: req.params.query,
      maxResults: MAX,
    })
    .then((responce) => {
      res.status(200).send(responce);
    })
    .catch((e) => {
      res.status(e.code).send("Error message");

    });
});

const Response = {
  data:{
  kind: "youtube#searchListResponse",
  etag: "BnhgNaaXXQTOyWqoYE1oOh0JIw4",
  nextPageToken: "CAgQAA",
  regionCode: "AU",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 8,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "rmqGmJWYLxoD3BWZ1x4-gKqAZUk",
      id: {
        kind: "youtube#video",
        videoId: "WS9NlnrpNS4",
      },
      snippet: {
        publishedAt: "2020-01-29T10:46:13Z",
        channelId: "UCpL_tis0ertYh2DSOiCm51g",
        title: "13 THINGS TO DO IN BRISBANE AUSTRALIA",
        description:
          "Brisbane Australia? Yeah it is definitely one of the best cities in the world for so many reasons. Come check out our things to do in Brisbane Australia to get a ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/WS9NlnrpNS4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/WS9NlnrpNS4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/WS9NlnrpNS4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "World Nomac",
        liveBroadcastContent: "none",
        publishTime: "2020-01-29T10:46:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "dcBCzFoQT6IW_vV9XWU0CvjQ0i0",
      id: {
        kind: "youtube#video",
        videoId: "0Mv48ZM7gu4",
      },
      snippet: {
        publishedAt: "2013-06-30T20:45:11Z",
        channelId: "UCGaOvAFinZ7BCN_FDmw74fQ",
        title: "Brisbane Vacation Travel Guide | Expedia",
        description:
          "Brisbane – This city is best any time of year. As the capital of Australia's sunshine state, a typical Brisbane day promises to be no less than perfect. Check out the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/0Mv48ZM7gu4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/0Mv48ZM7gu4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/0Mv48ZM7gu4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Expedia",
        liveBroadcastContent: "none",
        publishTime: "2013-06-30T20:45:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "_Fy_foAgTwxVXUbyHVCmIDVqYYk",
      id: {
        kind: "youtube#video",
        videoId: "OGsRE8OnC6A",
      },
      snippet: {
        publishedAt: "2021-08-18T08:55:20Z",
        channelId: "UCqeYhVRqZF8rjafmep93PWg",
        title: "So You Wanna move to Brisbane in 2021? WATCH THIS FIRST!",
        description:
          "Before you move your entire life to Brisbane, make sure you know what you're in for - THE GOOD AND THE BAD! Here's the pros and cons of moving here, UP ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/OGsRE8OnC6A/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/OGsRE8OnC6A/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/OGsRE8OnC6A/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Adam Robert Young",
        liveBroadcastContent: "none",
        publishTime: "2021-08-18T08:55:20Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "lo1I-JolBxJ4olLZPGyYZzn6Er0",
      id: {
        kind: "youtube#video",
        videoId: "vs9Pp2wBm-Y",
      },
      snippet: {
        publishedAt: "2021-08-30T03:06:18Z",
        channelId: "UC9jiSrgOl-tKXqHRF8fSYkQ",
        title: "Brisbane City Friday Night Walk - AUSTRALIA",
        description:
          "Brisbane City | Queensland | Australia Recorded on 28 May 2021 | Friday 5:47 pm Location Timestamps 00:00 Queen Street 00:35 Eagle Street 06:20 Eagle ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/vs9Pp2wBm-Y/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/vs9Pp2wBm-Y/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/vs9Pp2wBm-Y/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Underdog",
        liveBroadcastContent: "none",
        publishTime: "2021-08-30T03:06:18Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "zhLZsotfCvp73ZERLIaD7wPMuGI",
      id: {
        kind: "youtube#video",
        videoId: "G2EHwVJQ54Q",
      },
      snippet: {
        publishedAt: "2020-02-29T13:40:25Z",
        channelId: "UCMhDk2qIKoE7bVht4GeQ8Lg",
        title: "BRISBANE Travel Guide: South Bank and CBD | Little Grey Box",
        description:
          "Travel Well in Brisbane with our epic guide to South Bank and the Brisbane CBD. We show you our beautiful home town along with some of the very best things ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/G2EHwVJQ54Q/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/G2EHwVJQ54Q/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/G2EHwVJQ54Q/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Little Grey Box",
        liveBroadcastContent: "none",
        publishTime: "2020-02-29T13:40:25Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "m4QIU9-eL6PnUlUwcOQB2Gl-0vU",
      id: {
        kind: "youtube#video",
        videoId: "nc4Zm0Zhptc",
      },
      snippet: {
        publishedAt: "2021-03-28T13:00:10Z",
        channelId: "UC7nxXZU_UsVrNdeaA5BYEeA",
        title: "Brisbane, Queensland, Australia 🇦🇺 | 4K Drone Footage",
        description:
          "Brisbane, Queensland, Australia | 4K Drone Footage If you are interested in these amaznig footage Get unlimited downloads of 55+ million creative assets ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nc4Zm0Zhptc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/nc4Zm0Zhptc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nc4Zm0Zhptc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "ALL in 4K",
        liveBroadcastContent: "none",
        publishTime: "2021-03-28T13:00:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "_245-5jH33YYklJG7vMK7uLgBs8",
      id: {
        kind: "youtube#video",
        videoId: "kGKaBFmIFD8",
      },
      snippet: {
        publishedAt: "2021-04-27T08:30:11Z",
        channelId: "UCqeYhVRqZF8rjafmep93PWg",
        title:
          "Brisbane: Australia&#39;s Most BORING City? | 2+ YEARS LATER...",
        description:
          "Just over 2 years ago, I started this channel with the goal of finding out if Brisbane was as boring as I originally thought. This was the first video: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/kGKaBFmIFD8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/kGKaBFmIFD8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/kGKaBFmIFD8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Adam Robert Young",
        liveBroadcastContent: "none",
        publishTime: "2021-04-27T08:30:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "u6H9E0W2K4Qf0uzz2oUdFCWd34o",
      id: {
        kind: "youtube#video",
        videoId: "ecWjFufDNCQ",
      },
      snippet: {
        publishedAt: "2013-09-04T01:55:39Z",
        channelId: "UCbwz3lN4GOm6G_RaGW0RE6A",
        title: "Brisbane - City Video Guide",
        description:
          "http://www.expedia.com.au/Brisbane.d179993.Destination-Travel-Guides The capital city of the state of Queensland, the heart of hilly Brisbane is the river, which ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ecWjFufDNCQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ecWjFufDNCQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ecWjFufDNCQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Expedia.com.au",
        liveBroadcastContent: "none",
        publishTime: "2013-09-04T01:55:39Z",
      },
    },
  ],
}
};

module.exports = router;
