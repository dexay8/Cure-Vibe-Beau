

var data = [{
    id:1,
    Test:'COVID-19 RT-PCR TEST',
    Price:600,
    },
    {
    id:2,
    Test:'TOTAL ERYTHROCYTE COUNT',
    Price:400,
    },
    {
    id:3,
    Test:'TOTAL LEUCOCYTE COUNT (TLC)',
    Price:400
    },
    {
    id:4,
    Test:'DIFFERENTIATED LEUCOCYTE COUNT (DLC)',
    Price:400
    },
    {
    id:5,
    Test:'ERYTHROCYTE SEDIMENTATION RATE (ESR)',
    Price:400
    },
    {
    id:6,
    Test:'HEMOGLOBIN CONCENTRATION',
    Price:400
    },
    {
    id:7,
    Test:'PLATELET COUNT',
    Price:400
    },
    {
    id:8,
    Test:'CLOTTING TIME/PROTHROMBIN TIME',
    Price:300
    },
    {
    id:9,
    Test:'FIBRINOGEN ACTIVITY TEST',
    Price:600
    },
    {
    id:10,
    Test:'HEMOGLOBIN 1AC',
    Price:520
    },
    {
    id:11,
    Test:'ENZYMOLOGY',
    Price:875
    },
    {
    id:12,
    Test:'LIPID PROFILE TEST',
    Price:375
    },
    {
    id:13,
    Test:'LIVER FUNCTION TEST',
    Price:415
    },
    {
    id:14,
    Test:'BLOOD SUGAR TEST',
    Price:50
    },
    {
    id:15,
    Test:'THYROID PROFILE',
    Price:375
    },
    {
    id:16,
    Test:'SERUM CALCIUM TEST',
    Price:175
    },
    {
    id:17,
    Test:'SERUM IRON TEST',
    Price:575
    },
    {
    id:18,
    Test:'RENAL FUNCTION TEST',
    Price:1275
    },
    {
    id:19,
    Test:'URINE TEST',
    Price:275
    },
    {
    id:20,
    Test:'VITAMIN B COMPLEX TEST',
    Price:1600
    },
    {
    id:21,
    Test:'25 DEHYDROXY VITAMIN D TEST',
    Price:900
    },
    ];


    const tempdata=[];
    let books=document.querySelectorAll('.book');
    for(let i=0;i<books.length;i++)
    {
 books[i].addEventListener('click',()=>{
  const temp=data.filter(user => user.id=== i+1);
    tempdata.push(temp);
    console.log(tempdata);
 })
}

