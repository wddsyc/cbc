var loadMoreBtn_clickable = true;
function appendMore(reqflag){
	reqflag = reqflag === undefined ? 1 : reqflag;
	url = reqflag == 1 ? 'channel_more.php' : 'column_more.php';
	var params = $('#loadMoreBtn').attr('name');
	$('#loadMoreBtn').html('Мгдижа...');
	if (loadMoreBtn_clickable == true)
	{
		$.ajax({
			url: url,
			method: 'post',
			data: params,
			dataType: 'text/html',
			error: function(){loadMoreBtn_clickable=true;},
			success: function(data){
				$('#loadMoreBtn').remove();
				$('#hideHtml').remove();
				var relationObj = $('section:last .b2c_con ul');
				var relationLiObj = $('section:last .b2c_con ul li:last');
				$('#articlebox').append(data);
				var hideHtml = $('#hideHtml').html();
				if ($.trim(hideHtml) != "")
				{
					relationLiObj.removeClass("nb_b");
				}
				else{
					relationLiObj.addClass("nb_b");
				}
				relationObj.append(hideHtml);
				loadMoreBtn_clickable = true;
			}
		});
	}
	loadMoreBtn_clickable = false;

}