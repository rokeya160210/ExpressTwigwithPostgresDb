# ExpressTwigwithPostgresDb


<h1>Express.Js, Twig , PostgresDB</h1>

To run this app:

<li>
  <b>Clone the repo using:</b>
  "git clone https://github.com/rokeya160210/ExpressTwigwithPostgresDb.git"
</li>

<li>
  <b>Open CMD/TERMINAL in Project Directory</b>
</li>


<li>
  <b>Install package dependencies:</b>
  "npm install"
</li>


<li>
  <b>Start App:</b>
  "npm start"
</li>

<li>Open in browser: "http://localhost:3000"</li>
<li><b>databaseName:</b>"citytemprature" <li>
  <b>Table Creation :</b> ct<br>{<br>
  city_id : integer,<br>
  city_name:character(50),<br>
  low_temparature:character(20)<br>
  high_temprature: character(20)<br>
  "ct_pkey" PRIMARY KEY, btree (city_id)<br>
    "ct_city_name_key" UNIQUE CONSTRAINT, btree (city_name)<br>
  }<br>
  INSERT INTO ct (city_id, city_name, low_temparature,high_temprature)
VALUES (1, Dhaka, 20,30);


<h4>Thank you!</h4>
