rm(list=ls())

#Recording the number of homegrown dragon fruit
Total_Fruits <- c(9,2)
bp <- barplot(Total_Fruits, ylim=c(0,10), main="Total Fruits Produced By Each Variety", 
        names.arg=c("Vietnam White", "Common Red"), ylab="Number Of Fruits",
        xlab="Variety (Oldest to Newest Producer)", col="pink")
text(bp, 1, labels=Total_Fruits)
text(2,8, labels="Total Dragon Fruit: 11")


#Another Graph
Season_1 <- c(1,0)
Season_2 <- c(6,0)
Season_3 <- c(4,2)
Seasonal_Fruits <- data.frame(Season_1, Season_2, Season_3)
Seasonal_Fruits
Labels <- c=data.frame() # fix this please!!!

DF_Matrix <- as.matrix(Seasonal_Fruits)
rownames(DF_Matrix) <- c("Vietnam White", "Common Red")
DF_Matrix
  
bp_2 <- barplot(DF_Matrix, col=c("Pink", "Red"), main="Seasonal Fruits Produced By Each Variety",
          names.arg=c("2017-18", "2018-19", "2019-20"), xlab="Season", ylab="Number Of Fruits",
          las=1)
legend(x=0.2, y=5.5, cex=0.6, fill=c("Pink", "Red"), legend=c("Vietnam White", "Common Red"))


#Other Ideas:
#Average fruits in one season per variety (individual plant)
#Average Brix score for each variety (state average of what)
#Average Weight for each variety (state average of what)
#Stacked Barplot number of fruit produced each season



