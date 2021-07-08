function generatePDF(){
    const body1 =   "<br>" + 
                    "<center>" + 
                        "Authorization<hr style='width: 75%'>" +
                        "<p style='text-align: justify; width: 75%; font-size: 12px'>" + 
                        "Authorization: By signing below, you authorize: (a) backgroundchecks.com (“BGC”) to request information about you " + 
                        "from any public or private information source; (b) anyone to provide information about you to BGC; (c) BGC to provide " + 
                        "us My Mobile, LLC and its client, TracFone Wireless, Inc., one or more reports based on that information; and (d) us " + 
                        "to share those reports with others for legitimate business purposes related to your employment. BGC may investigate " + 
                        "your education, work history, professional licenses and credentials, references, address history, social security " + 
                        "number validity, right to work, criminal record, lawsuits, driving record, credit history, and any other information " + 
                        "with public or private information sources. You acknowledge that a fax, image, or copy of this authorization is as " +
                        "valid as the original. You make this authorization to be valid for as long as you are an applicant or employee with us." + 
                        "<br><br>" + 
                        "The Consumer Financial Protection Bureau’s “Summary of Your Rights under the Fair Credit Reporting Act” is attached to " + 
                        "this authorization. If you are a New York applicant, a copy of New York’s law on the use of criminal records is attached. " + 
                        "By signing below, you acknowledge receipt of these documents. Personal Information: <br><br>Please print the information " + 
                        "requested below to identify yourself for BGC.</p>" + 
                    "</center><br><br>" + 
                    "<div style='font-size: 12px'>" + 
                        "Printed name: <u>" + document.getElementById("name").value + " " + document.getElementById("lName").value + "</u><br>" +
                        "Other names used: <u>" + document.getElementById("name").value + "</u><br>" +
                        "Current and former addresses: <u>" + document.getElementById("address").value + "</u><br>" +
                    "</div>" +
                    "<hr><br>";
    const element = "<br><hr>" + document.getElementById("name").value;
    const element2 = "</div><hr><br>";

    html2pdf()
    .from(body1 + element + element2)
    .output('/Applications/MAMP/htdocs/mymobile/img/file.pdf', "F")
    .save();
}