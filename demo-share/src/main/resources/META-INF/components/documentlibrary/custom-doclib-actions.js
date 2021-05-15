(function() {

	YAHOO.Bubbling.fire("registerAction", {
		actionName : "viewInBrowser",
		fn : function viewInBrowser(file) {
			var contentUrl = "/share/proxy/alfresco/acosix/"
					+ file.nodeRef.replace(":/", "") + "/" + file.fileName;
			window.open(contentUrl);
		}
	});

})();