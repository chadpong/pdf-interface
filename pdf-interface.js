function createPDF () {
	var font = {
	   THSarabun : {
	     normal : 'THSarabun.ttf',
	     bold : 'THSarabunBold.ttf'
	   }
	};

	var docDefinition = {
			pageMargins: [20, 90, 20, 70], // left, top, right, bottom
	 		header: { 				
				margin : [10, 0,0,0],
				image: 'nhso_logo',
				width: 200				       
		    },
		    footer: {		    	
		        margin: [20 , 5, 0, 0],
	 			columns: [
					{
						image: 'nu_logo',
						width: 200,
						alignment : 'center'
					}								
				]	
		    },		    
	 		content: [	 			
 				{
 					 text: 'ข้อตกลงการดูแล',
 					 fontSize : 16,
 					 alignment : 'center'
 				},	 				
 				{
	 				table: {
						widths: [100, '*', 200, '*'],
						headerRows: 1,
						body: [
							[ 't_header', 't_header', 't_header', 't_header'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd\naaaa'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],
							[ 'aaa', 'bbb', 'ccc', 'dddd'],							
							[ 'aaa', 'bbb', 'ccc', 'dddd']
						]
					}									
				}					    
			],
			defaultStyle: {
				font: 'THSarabun'
			},
			images : {
				nu_logo : base64_nu_logo,
				nhso_logo : base64_nhso_logo
			}
 		};

 		pdfMake.fonts = font; 		
 		// pdfMake.createPdf(docDefinition).open();
 		pdfMake.createPdf(docDefinition).getBase64(function (base64) {
			$('iframe').attr('src', "data:application/pdf;base64," + base64);
		});
}