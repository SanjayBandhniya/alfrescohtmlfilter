(function() {
	var $combine = Alfresco.util.combinePaths;
	YAHOO.Bubbling.fire("registerAction", {
		actionName : "viewInBrowser",
		fn : function viewInBrowser(file) {

			var contentUrl = "/acosix/" + file.jsNode.nodeRef.storeType + "/"
					+ file.jsNode.nodeRef.storeId + "/"
					+ file.jsNode.nodeRef.id + "/" + file.fileName;
			var viewUrl = $combine(Alfresco.constants.PROXY_URI, contentUrl);
			window.open(viewUrl);
		}
	});

})();
