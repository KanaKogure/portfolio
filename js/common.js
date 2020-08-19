$(function(){
	 /*-----------↓スムーズスクロール↓--------------*/
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーズスクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });


	 /*----------↓ pageUpボタンの表示制御↓-------------*/
	 //変数topBtnを宣言してjQueryセレクタpageUpを代入
	 var topBtn = $("#pageUp");
	 //変数topBtnを隠す
	 topBtn.hide();
	 //スクロールが600pxに達したらボタンを表示
	 $(window).scroll(function(){
	 //もしユーザースクロールの距離が600pxより大きくなったら
	 if( $(window).scrollTop() >600 ){
		 //ボタンがフェードインされる(1秒で)
		topBtn.fadeIn(1000);
	 		}
			//上の条件を満たさなかった場合はフェードアウト(0.5秒で)
		else{
		topBtn.fadeOut(500);
			}

		});
   //
	//  /*----------↓追随メニュー↓-------------*/
	//  //変数followBoxを宣言し、jQueryセレクタ#navを代入
	//  var followBox = $("#nav");
	//  //変数offsetを宣言し、変数followBox(#nav)の初期表示位置を代入
	//  var offset = $(followBox).offset();
	//  //変数topPaddingを宣言し、 30(数値)を代入
	//  var topPadding = 30;
  //
	//  //window（表示されているウィンドウ）をスクロールしたら、｛｝内の処理を行う
	//  $(window).scroll(function(){
	// 	 //もし#navの初期表示位置より、スクロースしたpx数がおおきくなったら
	//  	if( $(window).scrollTop() > offset.top ){
	// 		$(followBox).stop().animate({
	// 			//マージントップの値をwindowの上からのスクロールした距離-初期表示位置+変数topPaddingの値
	// 			"margin-top":$(window).scrollTop()-offset.top+topPadding
	// 	  });
	// 	}else{
  //     //上の条件を満たさない場合（スクロールして上に戻ったら）
	// 		//cssで指定してあるmargin-topの値に戻す
	// 		$(followBox).stop().animate({
	// 			"margin-top":0
	// 		});
	// 	}
	//  });

	// /*-----------↓アコーディオン↓--------------*/
	// var open = "click and open +";
	// var close ="click and close －";
	// //#biographyBox buttonをクリックしたら{処理}をする
	// $("#biographyBox .button").click(function(){
	// 	//#biographyBox .textを閉じたり開いたり(slideToggleメソッド)
	// 	$("#biographyBox .text").slideToggle();
	// 	//もし、クリックした要素の文字列が"click and open ＋"だったら"
	// 	if($(this).text()==open){
	// 	//"click and open －"に変更
	// 	$(this).text (close)
	// 	}
	// 	//上の条件を満たさず、もしクリックした要素の文字列が"click and  close －"だったら
	// 	else if($(this).text()==close){
	// 	$(this).text (open)
	// 	}
	// });

	  var fix    = $("#navigation");             //メニューオブジェクトを格納
	  var fixTop = fix.offset().top;             //メニューの縦座標を格納
	  $(window).scroll(function () {             //スクロールが発生したら開始
	    if($(window).scrollTop() >= fixTop) {    //スクロール時の縦座標がメニューの縦座標以上なら…
	      fix.css("position","fixed");           //メニューに position:fixed 付与
	      fix.css("top","0");                    //メニューに top:0 付与
	    } else {
	      fix.css("position","");                //メニューの position を空に
	      fix.css("top","");                     //メニューの top を空に
	    }
	  });

		var sections = $('section')
			nav = $('nav[role="navigation"]');

		$(window).on('scroll', function () {
		  	var cur_pos = $(this).scrollTop();
		  	sections.each(function() {
		    	var top = $(this).offset().top - 50
		        	bottom = top + $(this).outerHeight();
		    	if (cur_pos >= top && cur_pos <= bottom) {
		      		nav.find('a').removeClass('active');
		      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		    	}
		  	});
		});
		nav.find('a').on('click', function () {
		  	var $el = $(this)
		    	id = $el.attr('href');
			$('html, body').animate({
				scrollTop: $(id).offset().top - 50
			}, 0);
		  return false;
		});

});
