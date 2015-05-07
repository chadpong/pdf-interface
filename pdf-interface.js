function createPDF () {
	var font = {
	   THSarabun : {
	     normal : 'THSarabun.ttf',
	     bold : 'THSarabunBold.ttf'
	   }
	};

	var docDefinition = {
			pageSize: 'A4',
			pageMargins: [20, 100, 20, 70], // left, top, right, bottom
	 		header: {
	 			margin: 5,
	 			columns: [
					{
						image: 'nhso_logo',
						width: 200
					},
					{
						stack : [
							{
								margin : [20, 20, 20, 0],
								text : 'โครงการพัฒนาฐานข้อมูลและสารสนเทศเพื่อการดูแลผู้สูงอายุระยะยาว',
								fontSize : 18,
								bold : true,
								alignment: 'right',
							},
							{
								margin : [20, 22, 20, 0],
								text : 'รายงานการดูแลผู้สูงอายุระยะยาวสำหรับผู้จัดการรายกรณี',
								fontSize : 16,
								bold : true,
								alignment: 'right',
							}
						]	
					}				
				]				       
		    },
		    footer: {		    	
		        margin: [75 , 0, 0, 0],
	 			columns: [
					{
						image: 'nu_logo',
						width: 50
					},
					{
						stack : [

							{
								margin : [20, 5, 20, 0],
								text : 'จัดทำโดย มหาวิทยาลัยนเรศวร จังหวัดพิษณุโลก',
								fontSize : 18,
								bold : true,
								alignment: 'left',
							},
							{
								margin : [20, 5, 20, 0],
								text : 'E-mail : childwelfare.nu@gmail.com Facebook : www.facebook.com/SeniorLTC',
								fontSize : 16,
								bold : true,
								alignment: 'left',
							}
						]	
					}				
				]	
		    },		    
	 		content: [
	 			{canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*20, y2: 5, lineWidth: 1 }]},
	 			{
	 				margin : [0, 20, 0, 0],
	 				text : "ข้อตกลงแผนการดูแลผู้สูงอายุ",
	 				fontSize : 16,
	 				bold : true,
	 				alignment : 'center'
	 			},
	 			{
	 				text : '(Care Plan Agreement)',
	 				fontSize : 16,
	 				bold : true,
	 				alignment : 'center'
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

 		

 		pdfMake.createPdf(docDefinition).getBase64(function (base64) {
			$('iframe').attr('src', "data:application/pdf;base64," + base64);
		});
}