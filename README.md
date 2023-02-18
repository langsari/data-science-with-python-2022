# Data science with Python 2022
------
### Thailand Happiness
-----
* Installation
    * Python v.3
    * Python libraries:
        * sklearn.
        * Pandas.
        * numpy.
        * seaborn
        * matplotlib.
        * datetime.
        * yellowbrick.
-----

### 1.Business understand
------
ต้องการรู้สติเกี่ยวกับความสุขของคนไทยเเละต้องการเเบ่งกลุ่มโดยจากการวัดในด้านๆต่างของข้อมูล

เช่น 'Life Ladder', 'Log GDP per capita', 'Social support', 'Healthy life expectancy at birth', 

'Freedom to make life choices','Generosity', 'Perceptions of corruption', 'Positive affect',

 'Negative affect' เป็นต้น 

-----
### 2.Data understand
------
ข้อมูลเอาจาก[worldhappiness.report]( https://worldhappiness.report/ed/2021/#appendices-and-data )

เป็นไฟล์Excel 

-----
### 3.Data Preparation
------
ในข้อมูลที่เว็บได้ให้มาหลายประเทศ

-ขั้นแรกเอาประเทศอื่นออกเเละเลือกเเค่ข้อมูลของประเทศไทย

-ขั้นสองเอาคอลัมปีเอามาเป็นindexโดยใช้Date time

-ขั้นสามเปลี่ยนชื่อคอมลัมที่มีช่องว่างระว่างชื่อให้เเทนด้วย"_"

-ขั้นสี่ เช็คmisiing value

-----
### 4.Modeliing
-----
-เอาข้อมูลที่ทำความสะอาดเเล้วมาtransform

-เอามาดูคะเเนนของการเเบ่งกลุ่ม(สังเกตุได้เลยการเเบ่งเป็น2กลุ่มจะได้คะเเนนมากที่สุด)

-เริ่มทำโมเดลโดยเอาคอลัมที่อยากจะเอามาเทรนหรือใช้ในการทำโมเดล

-เอามาtransformข้อมูลอีกรอบ

-เอาข้อมูลที่transformมาใส่ในโมเดล 

-โมเดลที่จะทำคือโมเดลเเบ่งcluster โดยทำเป็น2cluster เพราะว่า คะเเนนเยอะสุด

= ผลลัพท์ที่คือ [0 0 0 0 0 0 0 0 0 0 1 1 1 1 1]

clusterเเรก = 0 กลุ่มของปี2006 ถึง 2015

culusterสอง =1  กลุ่ม2016 ถึง 2020

----
### 5.Evalution
----
วัดความเเม่นยำของโมเดลที่ได้คือ  0.29 หรือ 29% เต็ม100















