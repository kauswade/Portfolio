$('#pageAboutButton').click(pageAboutFunction);
$('#pageWorkButton').click(pageWorkFunction);
$('#pageBookButton').click(pageBookFunction);
$('#pageContactButton').click(pageContactFunction);

$('#pageAboutBu').click(pageAboutFunction);
$('#pageWorkBu').click(pageWorkFunction);
$('#pageBookBu').click(pageBookFunction);
$('#pageContactBu').click(pageContactFunction);

function pageAboutFunction () {
    $('#pageWork').removeClass('pageShow');
    $('#pageBook').removeClass('pageShow');
    $('#pageContact').removeClass('pageShow');
    $('#pageWork').addClass('pageHide');
    $('#pageBook').addClass('pageHide');
    $('#pageContact').addClass('pageHide');
    $('#pageAbout').removeClass('pageHide');
    $('#pageAbout').addClass('pageShowTop');

    $('#pageAboutButton').removeClass('active');
    $('#pageWorkButton').removeClass('active');
    $('#pageBookButton').removeClass('active');
    $('#pageContactButton').removeClass('active');
    $('#pageAboutButton').addClass('active');
};
function pageWorkFunction () {
    $('#pageAbout').removeClass('pageShow');
    $('#pageBook').removeClass('pageShow');
    $('#pageContact').removeClass('pageShow');
    $('#pageAbout').addClass('pageHide');
    $('#pageBook').addClass('pageHide');
    $('#pageContact').addClass('pageHide');
    $('#pageWork').removeClass('pageHide');
    $('#pageWork').addClass('pageShow');
    
    $('#pageAboutButton').removeClass('active');
    $('#pageWorkButton').removeClass('active');
    $('#pageBookButton').removeClass('active');
    $('#pageContactButton').removeClass('active');
    $('#pageWorkButton').addClass('active');
};
function pageBookFunction () {
    $('#pageAbout').removeClass('pageShow');
    $('#pageWork').removeClass('pageShow');
    $('#pageContact').removeClass('pageShow');
    $('#pageAbout').addClass('pageHide');
    $('#pageWork').addClass('pageHide');
    $('#pageContact').addClass('pageHide');
    $('#pageBook').removeClass('pageHide');
    $('#pageBook').addClass('pageShow');
    
    $('#pageAboutButton').removeClass('active');
    $('#pageWorkButton').removeClass('active');
    $('#pageBookButton').removeClass('active');
    $('#pageContactButton').removeClass('active');
    $('#pageBookButton').addClass('active');
};
function pageContactFunction () {
    $('#pageAbout').removeClass('pageShow');
    $('#pageWork').removeClass('pageShow');
    $('#pageBook').removeClass('pageShow');
    $('#pageAbout').addClass('pageHide');
    $('#pageWork').addClass('pageHide');
    $('#pageBook').addClass('pageHide');
    $('#pageContact').removeClass('pageHide');
    $('#pageContact').addClass('pageShow');
    
    $('#pageAboutButton').removeClass('active');
    $('#pageWorkButton').removeClass('active');
    $('#pageBookButton').removeClass('active');
    $('#pageContactButton').removeClass('active');
    $('#pageContactButton').addClass('active');
};