# How to implement CRUD operations with a DataSource


<p>This example demonstrates how to implement CRUD operations with a DataSource that obtains data from a remote Rest service. The <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Data/DataSource"><u>DataSource</u></a> object does not implement CRUD operations out-of-the-box. We can do this using <a href="http://api.jquery.com/jQuery.ajax/"><u>jQuery.ajax</u></a>. It is also necessary to call the <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Data/DataSource/Methods#load"><u>DataSource.load</u></a> method to "inform" your widget that it is necessary to reload its content.</p>
<p><strong>See also:</strong><br /> <a href="http://phonejs.devexpress.com/Documentation/Howto/Data_Source_Examples#Data_Source_Examples_Custom_Sources_Connect_to_RESTful_Service"><u>Connect to RESTful Service</u></a><br /> <a href="https://www.devexpress.com/Support/Center/p/E4462">How to implement the Rest service based on an ASP.NET WebAPI application</a><br /><a href="https://www.devexpress.com/Support/Center/p/T137724">dxDataGrid - How to implement a custom store with CRUD operations</a> </p>

<br/>


