angular
  .module("myBlog", [])
  .factory("defaulMessages", defaulMessages)

function defaulMessages(){
  var arrayMessages = [
    {
      userName: "Oleksa",
      userMessage: "Denim you probably haven't heard of. Lorem ipsum dolor met
      consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean
      shorts sed magna aliqua. Lorem ipsum dolor met."
    },
    {
      userName: "Ihor",
      userMessage: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum."
    },
    {
      userName: "Anonimus",
      userMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }

  ]
}
