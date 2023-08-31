# 0x08. React Redux reducer+selector

`Front-end` `JavaScript` `ES6` `React`
![reduce+selector](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/5b02610e1a538e005104.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220819T112417Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=707e6185460bb608dbbf96c87efd3ff02839dd4819963fe44cc0903542c3635d)

# Resources
**Read or watch:**

* [Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
* [Selectors](https://redux.js.org/introduction/learning-resources#selectors)
* [Writing tests](https://redux.js.org/usage/writing-tests)
* [Immutable Map documentation](https://immutable-js.com/docs/v4.1.0)
* [Normalizr](https://github.com/paularmstrong/normalizr)
* [Normalizing State Shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

# Learning Objectives
At the end of this project, you should be able to explain to anyone, without the help of **Google:**

* The purpose of a reducer and the role it plays within your application
* Why a reducer should stay as pure as possible
* Why mutations should not happen within a reducer
* The use of Immutable within the reducer
* The use of Normalizr within the app
* Selectors: what they are and when to use them

  
<html>
<body>

        
          <h2 class="gap">Tasks</h2>

    <div data-role="task11436" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-11436">
  <span id="user_id" data-id="1742"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Write a basic reducer
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="1742"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <ul>
<li>Reuse the latest dashboard project you worked on in the React course <code>0x08-React_Redux_action_creator+normalizr</code></li>
</ul>

<p><strong>Create the basic state</strong></p>

<p>In a file named <code>reducers/uiReducer.js</code>, define the initial state of the reducer for the UI:</p>

<ul>
<li>It should have one boolean property <code>isNotificationDrawerVisible</code></li>
<li>It should have one boolean property <code>isUserLoggedIn</code></li>
<li>It should have one empty object <code>user</code></li>
</ul>

<p><strong>Create the reducer function</strong></p>

<p>In the same file, import all the actions that you created in the file <code>actions/uiActionTypes</code> and create a reducer function named <code>uiReducer</code>:</p>

<ul>
<li><code>DISPLAY_NOTIFICATION_DRAWER</code> should set <code>isNotificationDrawerVisible</code> to <code>true</code></li>
<li><code>HIDE_NOTIFICATION_DRAWER</code> should set <code>isNotificationDrawerVisible</code> to <code>false</code></li>
<li><code>LOGIN_SUCCESS</code> should set <code>isUserLoggedIn</code> to <code>true</code></li>
<li><code>LOGIN_FAILURE</code> should set <code>isUserLoggedIn</code> to <code>false</code></li>
<li><code>LOGOUT</code> should set <code>isUserLoggedIn</code> to <code>false</code></li>
</ul>

<p><strong>Write the tests</strong></p>

<p>In a file named <code>reducers/uiReducer.test.js</code>, define the test suite for our simple reducer:</p>

<ul>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function equals the initial state when no action is passed</li>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function equals the initial state when the action <code>SELECT_COURSE</code> is passed</li>
<li>Write a test verifying the state returned by the <code>uiReducer</code> function,  when the action <code>DISPLAY_NOTIFICATION_DRAWER</code> is passed, changes correctly the <code>isNotificationDrawerVisible</code> property</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Don&rsquo;t forget to set up the default case in your switch function</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should not mutate the state within the reducer</li>
<li>You must use the spread operator to change the state</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-react</code></li>
            <li>Directory: <code>0x08-react_redux_reducer_selector</code></li>
            <li>File: <code>task_0/dashboard/src/reducers/uiReducer.js, task_0/dashboard/src/reducers/uiReducer.test.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11436">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11436" data-batch-id="4" data-toggle="modal" data-target="#task-11436-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-11436-users-done-modal" data-task-id="11436" data-batch-id="4">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Students who are done with "0. Write a basic reducer"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11437" data-position="2" id="task-num-1">
      <div class="panel panel-default task-card " id="task-11437">
  <span id="user_id" data-id="1742"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Use Immutable for the UI Reducer
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="1742"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Now that you have set up a basic reducer, let&rsquo;s reuse what we learned in the Immutable module and apply it to that reducer:</p>

<ul>
<li>Install <code>Immutable.js</code> within the project</li>
<li>Update the <code>uiReducer.js</code> file to use <code>Map</code> from <code>Immutable.js</code></li>
<li>Update the different part of the reducer function to use <code>set</code> from <code>Map</code></li>
<li>Update the test suite, so it takes into account the changes</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>You can use the <code>toJS</code> function within your tests for an easy comparison</li>
<li>Remember that <code>Immutable.js</code> always return a new Map after a modification</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>For better performances, do not use any <code>fromJS</code>, <code>toJS</code> function within the reducer</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-react</code></li>
            <li>Directory: <code>0x08-react_redux_reducer_selector</code></li>
            <li>File: <code>task_1/dashboard/src/reducers/uiReducer.js, task_1/dashboard/src/reducers/uiReducer.test.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11437">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11437" data-batch-id="4" data-toggle="modal" data-target="#task-11437-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-11437-users-done-modal" data-task-id="11437" data-batch-id="4">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Students who are done with "1. Use Immutable for the UI Reducer"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11438" data-position="3" id="task-num-2">
      <div class="panel panel-default task-card " id="task-11438">
  <span id="user_id" data-id="1742"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Create a reducer for Courses
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="1742"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p><strong>Create a load action</strong></p>

<p>In the <code>courseActionTypes</code> file, create a new action corresponding to when the API returns the list of courses. You can name it <code>FETCH_COURSE_SUCCESS</code></p>

<p><strong>Create the course reducer and default state</strong></p>

<p>In a file <code>courseReducer.js</code>, write a reducer function. The default state should be an empty array. </p>

<p><strong>Define the <code>FETCH_COURSE_SUCCESS</code> action</strong></p>

<p>When the action creator sends the action <code>FETCH_COURSE_SUCCESS</code>, it also sends the list of courses in a data attribute. The action would look like:</p>

<pre><code>{
  type: FETCH_COURSE_SUCCESS,
  data: [
    {
      id: 1,
      name: &quot;ES6&quot;,
      credit: 60
    },
    {
      id: 2,
      name: &quot;Webpack&quot;,
      credit: 20
    },
    {
      id: 3,
      name: &quot;React&quot;,
      credit: 40
    }
  ]
}
</code></pre>

<p>When updating the state of the reducer, you should also set the attribute <code>isSelected</code> to false for every item in the list. The expected data from the reducer should be:</p>

<pre><code>[
  {
    id: 1,
    name: &quot;ES6&quot;,
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: &quot;Webpack&quot;,
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: &quot;React&quot;,
    isSelected: false,
    credit: 40
  }
]
</code></pre>

<p><strong>Define the <code>SELECT_COURSE</code> and <code>UNSELECT_COURSE</code> actions</strong></p>

<p>When the action creator sends the action <code>SELECT_COURSE</code>, it also sends an index corresponding to the id of the course to update. The action would look like:</p>

<pre><code>{
  type: SELECT_COURSE,
  index: 2
}
</code></pre>

<p>The expected data from the reducer should be:</p>

<pre><code>[
  {
    id: 1,
    name: &quot;ES6&quot;,
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: &quot;Webpack&quot;,
    isSelected: true,
    credit: 20
  },
  {
    id: 3,
    name: &quot;React&quot;,
    isSelected: false,
    credit: 40
  }
]
</code></pre>

<p>When the action creator sends the action <code>UNSELECT_COURSE</code>, it also sends an index corresponding to the id of the course to update. The action would look like:</p>

<pre><code>{
  type: UNSELECT_COURSE,
  index: 2
}
</code></pre>

<p>The expected data from the reducer should be:</p>

<pre><code>[
  {
    id: 1,
    name: &quot;ES6&quot;,
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: &quot;Webpack&quot;,
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: &quot;React&quot;,
    isSelected: false,
    credit: 40
  }
]
</code></pre>

<p><strong>Write the tests</strong></p>

<p>In a <code>courseReducer.test.js</code>, write a test suite for the new reducer. Define the following tests:</p>

<ul>
<li>Test that the default state returns an empty array</li>
<li>Test that <code>FETCH_COURSE_SUCCESS</code> returns the data passed</li>
<li>Test that <code>SELECT_COURSE</code> returns the data with the right item updated</li>
<li>Test that <code>UNSELECT_COURSE</code> returns the data with the right item updated</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Use ES6 for this reducer, we can look at Immutable later</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Try to make the update of object as efficient as possible, for example you can use ES6 Map</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-react</code></li>
            <li>Directory: <code>0x08-react_redux_reducer_selector</code></li>
            <li>File: <code>task_2/dashboard/src/actions/courseActionTypes.js, task_2/dashboard/src/reducers/courseReducer.js, task_2/dashboard/src/reducers/courseReducer.test.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11438">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11438" data-batch-id="4" data-toggle="modal" data-target="#task-11438-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-11438-users-done-modal" data-task-id="11438" data-batch-id="4">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Students who are done with "2. Create a reducer for Courses"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11439" data-position="4" id="task-num-3">
      <div class="panel panel-default task-card " id="task-11439">
  <span id="user_id" data-id="1742"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Create the reducer for notifications
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="1742"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p><strong>Create a load action</strong></p>

<p>In the <code>notificationActionTypes</code> file, create a new action corresponding to when the API returns the list of notifications. You can name it <code>FETCH_NOTIFICATIONS_SUCCESS</code></p>

<p><strong>Create the notifications reducer and default state</strong></p>

<p>In a file <code>notificationReducer.js</code>, write a reducer function. The default state should be an object with:</p>

<ul>
<li><code>notifications</code>, which will store the list of notifications</li>
<li><code>filter</code>, which will be the attribute storing which filter is selected</li>
</ul>

<p><strong>Define the <code>FETCH_NOTIFICATIONS_SUCCESS</code> action</strong></p>

<p>When the action creator sends the action <code>FETCH_NOTIFICATIONS_SUCCESS</code>, it also sends the list of notifications in a data attribute. The action would look like:</p>

<pre><code>{
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: [
    {
      id: 1,
      type: &quot;default&quot;,
      value: &quot;New course available&quot;
    },
    {
      id: 2,
      type: &quot;urgent&quot;,
      value: &quot;New resume available&quot;
    },
    {
      id: 3,
      type: &quot;urgent&quot;,
      value: &quot;New data available&quot;
    }
  ]
}
</code></pre>

<p>When updating the state of the reducer, you should also set the attribute <code>isRead</code> to false for every item in the list. The expected data from the reducer should be:</p>

<pre><code>{
  filter: &quot;DEFAULT&quot;,
  notifications: [
    {
      id: 1,
      isRead: false,
      type: &quot;default&quot;,
      value: &quot;New course available&quot;
    },
    {
      id: 2,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New resume available&quot;
    },
    {
      id: 3,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New data available&quot;
    }
  ]
}
</code></pre>

<p><strong>Define the <code>MARK_AS_READ</code> action</strong></p>

<p>When the action creator sends the action <code>MARK_AS_READ</code>, it also sends an index corresponding to the id of the notification to update. The action would look like:</p>

<pre><code>{
  type: MARK_AS_READ,
  index: 2
}
</code></pre>

<p>The expected data from the reducer should be:</p>

<pre><code>{
  filter: &quot;DEFAULT&quot;,
  notifications: [
    {
      id: 1,
      isRead: false,
      type: &quot;default&quot;,
      value: &quot;New course available&quot;
    },
    {
      id: 2,
      isRead: true,
      type: &quot;urgent&quot;,
      value: &quot;New resume available&quot;
    },
    {
      id: 3,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New data available&quot;
    }
  ]
}
</code></pre>

<p><strong>Define the <code>SET_TYPE_FILTER</code> action</strong></p>

<p>When the action creator sends the action <code>SET_TYPE_FILTER</code>, it also sends a filter attribute with either <code>DEFAULT</code> or <code>URGENT</code>. The action would look like:</p>

<pre><code>{
  type: SET_TYPE_FILTER,
  filter: &quot;URGENT&quot;
}
</code></pre>

<p>The expected data from the reducer should be:</p>

<pre><code>{
  filter: &quot;URGENT&quot;,
  notifications: [
    {
      id: 1,
      isRead: false,
      type: &quot;default&quot;,
      value: &quot;New course available&quot;
    },
    {
      id: 2,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New resume available&quot;
    },
    {
      id: 3,
      isRead: false,
      type: &quot;urgent&quot;,
      value: &quot;New data available&quot;
    }
  ]
}
</code></pre>

<p><strong>Tips:</strong></p>

<ul>
<li>Use ES6 for this reducer, we can look at Immutable later</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Try to make the update of object as efficient as possible, for example you can use ES6 Map</li>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-react</code></li>
            <li>Directory: <code>0x08-react_redux_reducer_selector</code></li>
            <li>File: <code>task_3/dashboard/src/actions/notificationActionTypes.js, task_3/dashboard/src/reducers/notificationReducer.js, task_3/dashboard/src/reducers/notificationReducer.test.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11439">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11439" data-batch-id="4" data-toggle="modal" data-target="#task-11439-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-11439-users-done-modal" data-task-id="11439" data-batch-id="4">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Students who are done with "3. Create the reducer for notifications"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11440" data-position="5" id="task-num-4">
      <div class="panel panel-default task-card " id="task-11440">
  <span id="user_id" data-id="1742"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Normalizr &amp; Immutable
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="1742"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>As you can see, updating a specific item in a collection is rather complicated and error prone. Using Normalizr is a good opportunity to simplify mutation</p>

<p><strong>Course schema</strong></p>

<p>Create a new file <code>schema/courses.js</code>. In the file define a schema entity for <code>courses</code>. Create a function <code>coursesNormalizer</code> that would take <code>data</code> as argument and normalize the data with the schema you created. </p>

<p><strong>In the course reducer function:</strong></p>

<ul>
<li>Update the initial state to use an <code>Immutable.js</code> Map</li>
<li>When <code>FETCH_COURSE_SUCCESS</code> action is called, normalize the data with the function you created and merge it with the state</li>
<li>When <code>SELECT_COURSE</code> or <code>UNSELECT_COURSE</code> is called, use the <code>setIn</code> function from Immutable to update the value of the item</li>
</ul>

<p><strong>Update the notification schema</strong></p>

<p>In the file <code>schema/notifications.js</code>, create a function <code>notificationsNormalizer</code> that would take <code>data</code> as argument and normalize it with the notification schema you created in the previous course. </p>

<p><strong>Update the notification reducer</strong></p>

<p>In the notification reducer function:</p>

<ul>
<li>Update the initial state to use an <code>Immutable.js</code> Map</li>
<li>When <code>FETCH_NOTIFICATIONS_SUCCESS</code> action is called, normalize the data with the function <code>notificationsNormalizer</code> you created and merge it with the state</li>
<li>When <code>SET_TYPE_FILTER</code>, use the <code>set</code> function from Immutable to update the value of the state</li>
<li>When <code>MARK_AS_READ</code>, use the <code>setIn</code> function from Immutable to update the value of the item in the state</li>
</ul>

<p><strong>Update the test files/suites:</strong></p>

<ul>
<li>Update the course reducer test file to match the new reducer</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>You can use the <code>fromJS</code> function from <code>Immutable.js</code> to easily create the initial state from an object</li>
<li>You can use the <code>toJS</code> function from <code>Immutable.js</code> to easily compare the expected data</li>
<li>Selecting an unselecting a course item should only take one line now</li>
<li>Marking a notification item as read should only take one line now</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-react</code></li>
            <li>Directory: <code>0x08-react_redux_reducer_selector</code></li>
            <li>File: <code>task_4/dashboard/src/schema/courses.js, task_4/dashboard/src/reducers/courseReducer.js, task_4/dashboard/src/schema/notifications.js, task_4/dashboard/src/reducers/notificationReducer.js, task_4/dashboard/src/reducers/courseReducer.test.js, task_4/dashboard/src/reducers/notificationReducer.test.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11440">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11440" data-batch-id="4" data-toggle="modal" data-target="#task-11440-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-11440-users-done-modal" data-task-id="11440" data-batch-id="4">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Students who are done with "4. Normalizr &amp; Immutable"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11441" data-position="6" id="task-num-5">
      <div class="panel panel-default task-card " id="task-11441">
  <span id="user_id" data-id="1742"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Selectors
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="1742"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Selectors are an efficient way to access the data from the state because a selector is not recomputed unless one of its arguments change.</p>

<p>Let&rsquo;s create a few selectors for the Notifications reducer in <code>src/selectors/notificationSelector.js</code></p>

<ul>
<li>Create a first selector for the filter named <code>filterTypeSelected</code>, that will return the value of the filter</li>
<li>Create another selector for the notifications named <code>getNotifications</code>, that will return the list of notifications in a Map format</li>
<li>Create another selector for the notifications named <code>getUnreadNotifications</code>, that will return the list of unread notifications in a Map format</li>
</ul>

<p>Create a test suite for your selectors in a file named <code>src/selectors/notificationSelector.test.js</code>:</p>

<ul>
<li>test that <code>filterTypeSelected</code> works as expected</li>
<li>test that <code>getNotifications</code> returns a list of the message entities within the reducer</li>
<li>test that <code>getUnreadNotifications</code> return a list of the message entities within the reducer</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>To write your tests, you can have a state variable using the reducer you created. And pass the state to the selector functions</li>
<li>You can also look into using Reselect for your own projects when you have advanced needs for filtering, reducing and merging data from the state</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>All the tests in the project should pass</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-react</code></li>
            <li>Directory: <code>0x08-react_redux_reducer_selector</code></li>
            <li>File: <code>task_5/dashboard/src/selectors/notificationSelector.js, task_5/dashboard/src/selectors/notificationSelector.test.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11441">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11441" data-batch-id="4" data-toggle="modal" data-target="#task-11441-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-11441-users-done-modal" data-task-id="11441" data-batch-id="4">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Students who are done with "5. Selectors"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>




          <div data-react-class="projects/ProjectReadyForReview" data-react-props="{&quot;csrfToken&quot;:&quot;60E-uAgq5tqGDwsXDgfdsYO-qJI20r0TL7bDkr-_liQwu8Hoj3csIG5BtFOJQGIyRNous505ftBCBp7XqC2Dsw&quot;,&quot;firstReview&quot;:true,&quot;peerReview&quot;:{&quot;availableReviewersURI&quot;:&quot;/corrections/3131529/available_reviewers.json&quot;,&quot;canReviewPeerDirectly&quot;:true,&quot;correctCorrectionURI&quot;:&quot;https://alx-intranet.hbtn.io/corrections/3131529/correct&quot;,&quot;qaReviewsURI&quot;:&quot;/corrections/to_review&quot;,&quot;readyForReviewURI&quot;:&quot;/corrections/3131529/toggle_ready_for_review.json&quot;,&quot;reviewDeadline&quot;:&quot;2022-08-25T06:00:00.000+03:00&quot;,&quot;synchronousManualReview&quot;:false},&quot;toggled&quot;:false}" data-react-cache-id="projects/ProjectReadyForReview-0"></div>


  </div>
</div>


      </article>

      <div class="copyright">Copyright © 2022 ALX, All rights reserved.</div>
    </main>

      <button class="btn btn-primary" id="search-button" data-search-active="false" data-toggle="modal" data-target="#search-modal">
  <i aria-hidden="true" class="fa fa-search "></i>
  <i aria-hidden="true" class="fa fa-window-minimize "></i>
</button>

      <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="search-modal-label">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <div id="search-bar-container">
    <input id="search-bar"
            type="text"
            name="hbtn-search-bar"
            placeholder="✨Start search by typing in this field✨">
</div>

            </div>
            <div class="modal-body">
                <div id="modal-spinner" class="spinner gap">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
                <div id="search-results-container">
</div>

            </div>
        </div>
    </div>
</div>



      <div class="modal fade" id="markdownGuideModal" tabindex="-1" role="dialog" aria-labelledby="markdownGuideModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Markdown Guide</h4>
        </div>
        <div class="modal-body">
            <h4>Emphasis</h4>
<pre>**<strong>bold</strong>**
*<em>italics</em>*
~~<strike>strikethrough</strike>~~</pre>
<h4>Headers</h4>
<pre># Big header
## Medium header
### Small header
#### Tiny header</pre>
<h4>Lists</h4>
<pre>* Generic list item
* Generic list item
* Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item</pre>
<h4>Links</h4>
<pre>[Text to display](http://www.example.com)</pre>
<h4>Quotes</h4>
<pre>> This is a quote.
> It can span multiple lines!</pre>
<h4>Images</h4>
<p>CSS style available: <code>width, height, opacity</code></p>
<pre>![](http://www.example.com/image.jpg)
![](http://www.example.com/image.jpg | width: 200px)
![](http://www.example.com/image.jpg | height: 124px | width: 80px | opacity: 0.6)
</pre>
<h4>Tables</h4>
<pre>| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

<em>Or without aligning the columns...</em>

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |
</pre>
<h4>Displaying code</h4>
<pre>`var example = "hello!";`

<em>Or spanning multiple lines...</em>

```
var example = "hello!";
alert(example);
```</pre>
        </div>
    </div>
  </div>
</div>


      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create',
            'UA-67152800-9',
            'auto', {
              userId: '1742'
            }
          );

        ga('send', 'pageview');

        $(document).ready(function() {
          ga(function(tracker) {
            var clientId = tracker.get('clientId');
            $('.ga-client-id').val(clientId);
          });
        });
      </script>




      


  </body>
  </html>