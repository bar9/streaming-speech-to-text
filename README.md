# Streaming speech to text
An ~~angular module~~ React library for connecting to streaming speech to text APIs (such as rev.ai)

# Goal
Provide a configurable ~~angular module~~ React library  with a recorder and a transcript player.

# Todo
- [x] first graphical POC
- [ ] rewrite in react
- [ ] audio recording
- [ ] connect to rev.ai API (with or without node SDK)
- [ ] (maybe) relay over node backend (see challenges)
- [ ] clean up dependencies
- [ ] unit tests

# Challenges
* The official node client relies on the stream API. There are userland implementations, but linking will
  probably not be straightforward.
