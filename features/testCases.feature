  Feature: It tells how is the weather from Google

  Scenario Outline: check how is the weather of today
    Given Open browser and goto google.com
    When I type how is todays weather in "<Location>" and enter
    Then It shows me the temperature
    And Tells me "Feels deadly cold" if temperature is between 20 to 45
    And Tells me "Feels damn cold" if temperature is between 46 to 60
    And Tells me "Feels cold" if temperature is between 61 to 69
    And Tells me "Feels normal" if temperature is between 70 to 80
    And Tells me "Feels hot" if temperature is between 81 to 89
    And Tells me "Feels too hot" if temperature is between 90 to 99
    And Tells me "Feels Burning hot" if temperature is between 100 to 120
    And Close the application
    
    Examples:
    	|Location|
    	|New York|
    	|	Dhaka	|
    	|San Francisco|
    	|Tromso, Norway|
    	|Qatar|
    	
    
#Scenario Outline: check how is the weather of today
#	Given Open browser and goto google.com
#	When I type how is todays weather and enter
#	Then It shows me the temperature
#	And Tells me <status> if temperature is between <temp1> to <temp2>
#	And Close the application
    
  #Examples:
    #| temp1 | 	temp2 | 	status 	|
    #|  50 	| 	 65   | Its cold today|
    #|	 66 	| 	 80   | Its very nice   |
    #|	 81 	| 	 100 	| Its hot  |