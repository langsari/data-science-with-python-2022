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
Want to become conscious about the happiness of Thai people and 

want to classify by measuring different aspects of the data.

-----
### 2.Data understand
------
Information taken from[worldhappiness.report]( https://worldhappiness.report/ed/2021/#appendices-and-data )

as an Excel file

-----
### 3.Data Preparation
------
In the information that the website has provided in many countries

-First remove other countries and select only Thailand data.

-Second step, use the year column as index by using Date time.

-Third step, change the column name with a space between the name and replace it with "_".

-The fourth step, check the misiing value
-----
### 4.Modeliing
-----
-Take the cleaned data to transform

-Take a look at the score of dividing into groups (observe that dividing into 2 groups will get the most points)

-Start modeling by taking columns that you want to train or use in modeling.

-Take it to transform the data again.

-Put the transformed data into the model

-The model to be done is the cluster division model. 

  by doing 2cluster because it gets the most points

=the result that is [0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1]

first cluster = 0 clusters from 2006 to 2015

culustertwo=1 group 2016 to 2020

----
### 5.Evalution
----
Measure the accuracy of the resulting model is 0.29 or 29% out of 100.















