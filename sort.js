idx_list = []
for(var i=0;i<list.length;i++)
{
	idx_list.push( [i,list[i]['score']])
}
for (var i = 0; i < idx_list.length; i++) 
{
    let value = idx_list[i][1]
    let list_value = idx_list[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && idx_list[j][1] > value; j--) 
    {
      // loop through the idx_list in the sorted array (the idx_list from the current to the beginning)
      // copy each item to the next one
      idx_list[j + 1] = idx_list[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    idx_list[j + 1] = list_value
}
sorted = []
for(i=0;i<idx_list.length;i++)
{
	idx_list[i] = list[idx_list[i][0]]
}
for(i=idx_list.length-1;i>=0;i--)
	sorted.push(idx_list[i])
