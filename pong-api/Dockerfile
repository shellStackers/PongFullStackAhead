FROM openjdk:8-jdk-alpine

ADD ./build/libs/pong*.jar /app/pong.jar
CMD ["java","-Xmx200m","-jar","/app/pong.jar"]

expose 8080