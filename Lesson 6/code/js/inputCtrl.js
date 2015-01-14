InputCtrl = function (vi,st) {
	vi.on("butt",function(d){st.add(d)});
	vi.on("save",function(){st.save()});	
};


