# groce-final
# My Magic 8 Bowie

Elevator

Ask the Magic 8 Bowie your life's questions, "shake" it and get an answer back from the wisdom of David Bowie lyrics/music snippets. Users may have the option to add their own options and customize their own 8 ball, via voice recognition, custom data.

Technologies

-Angular

-Voice recognition scripting

-Server to store music/lyrics

-Ionic

Features (MVP)

1) ability to provide lyrics and/or audio when user clicks to shake the 8-ball

2) ability to create custom 8-ball responses, David Bowie or not

3) responsive design, looking towards roadmap items

Roadmap

- mobile app via ionic
- ability to keep a log of previous questions and responses
- depending on accuracy and ease of use, voice recognition
- sidebar of bands performing in the area
- a daily bit of Bowie wisdom PUSH notification

User Stories

name: get advice
size: large 
value statement: As a user of Magic 8 Bowie, I want humorous entertainment in the form of David Bowie lyrics to guide me and provide some laughs
assumption: 
- UI will look like a Magic 8-ball
- assume lyrics can be drawn from an external point
- assume music snippets can be drawn from an external point
- assume music can be cut down into snippets and user will not have to visit external site
- assume that endpoint exists for getting data from server



acceptance criteria:

- user can interact with 8-ball, via text entry and submit or click
- upon clicking the ball will "shake"
- will return a randomized Bowie lyric, printed on the screen in the triangle shape where magic 8-ball usually returns text for the user to see
- will play audio of that lyric
- user can do this multiple times

NOTES: Endpoint: GET - api/resource

name: create own 8-ball data

size: small 

value statement: As a user of Magic 8 Bowie, I need to create custom "advice" for fun.

assumption:
- CRUD custom advice

acceptance criteria:
- user can do all the things needed to create and manipiulate their own custom advice

NOTES: CREATE/READ/UPDATE/DELETE

SEE FILES:
  wireframe_custompage.pdf
  216.0 KB

  wireframe_mainpage.pdf
  267.0 KB



