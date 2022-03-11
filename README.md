A React application as my first own project that involves a simple chat/messaging app, a weather app and a movie list app in one. Application uses Firebase authorization with google sign in, firebase firestore to store users data and firebase deploy to host the application.

Chat/Messaging App:
A user is able to create and name a chat room and start posting messages with photos. The chat and rooms are managed with Redux toolkit. The current user is recieved and each room created is dispatched and is stored associated with the user. 

Weather App:
When a user opens the weather page it uses the local locations latitude and longitude coordinates to find the weather. The page shows the current days weather along with the weeks weather. The page fetches the weather api to retrieve the weather data for the user.

Movie List App:
User can see the most recent movies comming out or out in theater by fetching IMDB api to retrieve the data of movies to display for the user. User can click on the movie to see more details and a trailer is also fetched using movie-trailer and react-player/youtube library that fetches the movies trailer from youtube to allow the user to watch.
