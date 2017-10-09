FROM openjdk:8-jdk-alpine

ADD ./build/libs/pong*.jar /app/pong.jar
CMD ["java","-Xmx200m","-Dspring.data.mongodb.uri=mongodb://heroku_lwf749w0:4g9l2m37di0l2gk3n8dclletq0@ds115045.mlab.com:15045/heroku_lwf749w0","-jar","/app/pong.jar"]

expose 8080