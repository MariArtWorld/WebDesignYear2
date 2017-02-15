angular.module('app')
  .controller('myController', ['$scope', function ($scope) {
$scope.posts = [
  {
    id: "firstP",
    title: "1: Nulla porttitor",
    post:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus risus a elit tempus, eu mattis elit faucibus. Suspendisse mollis suscipit erat id condimentum. Morbi malesuada sagittis augue ac condimentum. Morbi blandit mauris id nulla placerat, in hendrerit orci tempor. Duis accumsan molestie ipsum, nec facilisis dui. Integer facilisis commodo turpis, vitae tempor libero tincidunt at. Nunc porta commodo magna nec ultrices. Cras elementum, magna nec dictum viverra, lorem purus venenatis metus, eu molestie quam lacus aliquet libero. Pellentesque ac turpis volutpat ex blandit pretium eget imperdiet leo. Curabitur sit amet purus eget urna auctor condimentum. Proin porta dictum ornare. Nulla porttitor, risus at blandit elementum, ex felis eleifend mi, sit amet porta ligula nulla mattis ipsum. Praesent quis mauris lacus.",
    author: "Menganita Garcia"
  },
  {
    id: "secondP",
    title: "2: Etiam ut tempus massa",
    post:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non aliquam risus. Proin efficitur ut diam vitae mollis. Curabitur sit amet felis at nulla sagittis consectetur in at tortor. Quisque laoreet varius tellus, pharetra sodales eros. Quisque rhoncus massa turpis, ac feugiat leo gravida eu. Donec vehicula vehicula nibh dignissim bibendum. Donec at tortor id mauris rutrum dictum. Quisque gravida neque eu urna efficitur, quis viverra nulla maximus. Quisque blandit congue magna, non molestie tellus placerat vel. Proin sed dictum mi. Fusce a erat non turpis tempus pharetra. Etiam ut tempus massa. Ut ac ante augue.",
    author: "Jhon Doe"
  },
  {
    id: "thirdP",
    title: "3: Morbi tempor eros odio.",
    post:  "Maecenas vel dui non lorem luctus ornare. Cras in vehicula elit. Maecenas id nisl felis. Cras id convallis ante. Duis at tortor vitae sem tincidunt ullamcorper. Vivamus augue sem, ultricies a aliquam vel, tincidunt ut velit. Suspendisse lacus ligula, tincidunt in purus ut, vulputate vestibulum elit. Proin vulputate eleifend nulla sit amet vestibulum. Quisque augue tellus, aliquet sit amet rutrum a, eleifend id sapien. Vestibulum condimentum massa dolor, eu interdum justo fringilla feugiat. Donec sed dolor fringilla felis cursus pharetra. Ut iaculis nisl nec maximus posuere. Nulla sed velit sit amet eros fermentum euismod vitae at purus. Aenean cursus turpis arcu, sit amet efficitur nisl tincidunt in. Sed consectetur tincidunt turpis, auctor tempus libero. Morbi tempor eros odio.",
    author: "Fulanito Ramirez"
  },
  {
    id: "forthP",
    title: "4: Magna ipsum bibendum ex",
    post:  "Praesent viverra sed elit a semper. Duis dictum lacus vel odio iaculis tincidunt. Vivamus orci massa, auctor vel consectetur eleifend, volutpat vel justo. Vivamus egestas semper eros in dictum. Quisque nec ante a ex aliquet pellentesque. Praesent imperdiet turpis ut viverra tempus. Integer eget metus eget felis semper ornare. Pellentesque ut tortor nec diam accumsan fermentum non at quam. Morbi dignissim, massa consequat gravida pellentesque, magna ipsum bibendum ex, sit amet mattis purus urna sit amet enim. Praesent tristique augue nunc, et ultrices est vulputate nec. Curabitur lobortis, lorem varius mollis aliquet, orci odio eleifend quam, ac egestas dolor est sed mauris.",
    author: "Jeny Doe"
  }
]
}])
