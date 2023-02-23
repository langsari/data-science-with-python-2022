# Data science with Python 2022
------
### Thailand Happiness
-----

### Overview

This is a life cycle project using crisp-dm as the process to do this.

The objective of this project is to segment the people in the Thai happiness data as a guideline to solve the problem.

-----
![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/1.png?raw=true)

* Tool
    * Anaconda
    * Jupyter lab


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

# Methodology

### 1.Business understand
------
To become conscious about the happiness of Thai people and 

want to classify by measuring different aspects of the data.

-----
### 2.Data understand
------
Information taken from[worldhappiness.report]( https://worldhappiness.report/ed/2021/#appendices-and-data )

as an Excel file
![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/2.png?raw=true)


-----
### 3.Data Preparation
------
In the information that the website has provided in many countries:

-First remove other countries and select only Thailand data

-Second step, use the year column as index by using Date time

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/3..png?raw=true)

-Third step, change the column name with a space between the name and replace it with "_"
![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/4.png?raw=true)

-The fourth step, check the misiing value

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/5.png?raw=true)


-----
### 4.Modeliing
-----
model

   ->[Silhouette](https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_analysis_of_silhouette_score.htm)

  ->[Silhouette-youtube](https://youtu.be/Ritq16Iw7XQ)

-Take the cleaned data to transform

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/15.png?raw=true)

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/6.png?raw=true)

-Take a look at the score of dividing into groups (observe that dividing into 2 groups will get the most points)

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/7.png?raw=true)

-Start modeling by taking columns that you want to train or use in modeling and Take it to transform the data again

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/16.png?raw=true)

-Put the transformed data into the model

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/9.png?raw=true)

-The model to be done is the cluster division model

  by doing 2cluster because it gets the most points

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/10.png?raw=true)

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/11.png?raw=true)

first cluster = 0 clusters from 2006 to 2015

culustertwo=1 group 2016 to 2020

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/12.png?raw=true)


----
### 5.Evaluation
----
To measure the accuracy of the resulting model is 0.29 or 29% out of 100.

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/13.png?raw=true)

heatmap

![Alt text](https://github.com/langsari/data-science-with-python-2022/blob/Fadlaan_dtscience2022/life%20-%20cycle/image/14.png?raw=true)








