$(function(){
  let album=[
  "山道の緑が気持ちいい",
  "階段きつかった",
  "高尾山薬王院",
  "帰りはロープウェイでスイスイ",
  "〆のお蕎麦です"
  ];
  //mainの書き出し
  let mImg=$("<img>").attr("src","img/0.jpg").attr("alt",album[0]);
  $(".main").append(mImg);
  let mMsg=$("<p>").text(album[0]);
  $(".main").append(mMsg);
  //thumbの書き出し
  for(let i=0; i<album.length; i++){
    let tImg=$("<img>").attr("src","img/" + i + ".jpg").attr("alt", album[i]);
    $(".thumb").append(tImg);
  }
  //ギャラリーの入れ替え動作
  $("#gallery .thumb img").on("click",function(){
    let src=$(this).attr("src");
    let alt=$(this).attr("alt");
    $("#gallery .main img").attr("src",src).attr("alt",alt);
    $("#gallery .main p").text(alt);
  });
});