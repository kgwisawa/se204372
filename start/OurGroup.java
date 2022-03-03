import java.util.Vector;

public class OurGroup {

    private Vector<String> groupMembers;
    public OurGroup()
    {
        groupMembers = new Vector<String>();
        groupMembers.add("Wisawa Chotiphanpong 6220500725"); //PUT YOUR NAME HERE
        groupMembers.add("Trirattree Koanamsai 6220503210"); //TEST
        groupMembers.add("Nakrob Sukjai 6220502141");
        groupMembers.add("Pedklah Kamolsukyunyong 6220504721");
        groupMembers.add("Pakkawat Boonsri 6220504747");

    }
    public Vector<String> getGroupMembers () {
        return groupMembers;
    }

}
