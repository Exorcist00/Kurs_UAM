ListCtrl = function (vi,st) {
	st.on("added",function(d){vi.add(d)});
	vi.on("upd",function(a){st.update(a)})
};


