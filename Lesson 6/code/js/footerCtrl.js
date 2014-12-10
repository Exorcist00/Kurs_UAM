FooterCtrl = function (vi,st) {
	st.on("ft",function(le){vi.add(le)});
	st.on("update",function(a){vi.update(a)});
};

