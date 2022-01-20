import * as faker from '@faker-js/faker';

const posts = [
  {
    "videoUri": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
    "likes": parseInt(faker.datatype.number()/100),
    "comments": parseInt(faker.datatype.number()/100),
    "shares": parseInt(faker.datatype.number()/100),
    "song": {name: "By Google", imageUri: faker.image.avatar()},
    "user": {username: faker.name.findName(), imageUri: faker.image.avatar()}
  },
  {
    "videoUri": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    "likes": parseInt(faker.datatype.number()/100),
    "comments": parseInt(faker.datatype.number()/100),
    "shares": parseInt(faker.datatype.number()/100),
    "song": {name: "By Google", imageUri: faker.image.avatar()},
    "user": {username: faker.name.findName(), imageUri: faker.image.avatar()}
  },
  {
    "videoUri": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
    "likes": parseInt(faker.datatype.number()/100),
    "comments": parseInt(faker.datatype.number()/100),
    "shares": parseInt(faker.datatype.number()/100),
    "song": {name: "By Google", imageUri: faker.image.avatar()},
    "user": {username: faker.name.findName(), imageUri: faker.image.avatar()}
  },
  {
    "videoUri": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "likes": parseInt(faker.datatype.number()/100),
    "comments": parseInt(faker.datatype.number()/100),
    "shares": parseInt(faker.datatype.number()/100),
    "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    "song": {name: "By Blender Foundation", imageUri: faker.image.avatar()},
    "user": {username: faker.name.findName(), imageUri: faker.image.avatar()}
  },
  {
    "videoUri": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "description": "The first Blender Open Movie from 2006",
    "likes": parseInt(faker.datatype.number()/100),
    "comments": parseInt(faker.datatype.number()/100),
    "shares": parseInt(faker.datatype.number()/100),
    "song": {name: "By Blender Foundation", imageUri: faker.image.avatar()},
    "user": {username: faker.name.findName(), imageUri: faker.image.avatar()}
  }
]

export {posts}