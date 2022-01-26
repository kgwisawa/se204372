import java.util.Vector;

public class OurGroup {

    private Vector<String> groupMembers;
    public OurGroup()
    {
        groupMembers = new Vector<String>();
        groupMembers.add("YOUR NAME"); //PUT YOUR NAME HERE
        groupMembers.add("Trirattree Koanamsai 6220503210");
    }
    public Vector<String> getGroupMembers () {
        return groupMembers;
    }

}