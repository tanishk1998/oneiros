$('.me__all--item__trigger').click((e) => {
  showDialog(true)
  showDetails(e.currentTarget.id.split('--')[0])
})

$('.me__details--close').click(() => {
  showDialog(false)
})

// $('#me-main').click(() => {
//   if ($('#me-main').hasClass('bg--fade')) showDialog(false)
// })

const showDialog = (bool) => {
  if (bool) {
    $('.me__details').addClass('dialog--active')
    $('#me-main').addClass('bg--fade')
    $('header').addClass('bg--fade')
  } else {
    $('.me__details').removeClass('dialog--active')
    $('#me-main').removeClass('bg--fade')
    $('header').removeClass('bg--fade')
  }
}

const showDetails = (option) => {
  $('.me__details--content').html(details[option])
}

const details = {
  destival: `
    <div class="majorevent__content">
      <div class="majorevent__content--header">Destival (Group Dance Competition)</div>
      <div class="majorevent__content--para">
        Dance with your heart and soul and you&#39;re all set to steal the show.
        Yes, folks it&#39;s time for you to swivel your way onto the stage and light it up with passion and colors.
        Embark on this beautiful,
        intricately weaved web of alluring glamour and mesmerize us with your moves like we&#39;ve never seen
        before. <br>
        <br>
      </div>
      <div class="majorevent__content--header">
        Dance. Breathe. Flaunt. Repeat.
      </div>
      <div class="majorevent__content--details">
        <div class="majorevent__content--details__container">
          <h3>Contact</h3>
          <p><b>SUKHMANI SINGH: </b>8368687399</p>
          <p><b>ADITHYA SAISH: </b>8800471477</p>
          <p><b>UTKARSH SHARMA: </b>9639286390</p>
        </div>
        <div class="
            majorevent__content--details__container">
          <h3>Registration Fee</h3>
          <ul>
            <li>Rs.150 per Team Member</li>
            <li>Rs.150 per Team Helper</li>
            <li>No fee for Faculty Member(s)</li>
          </ul>
        </div>
        <div class="majorevent__content--details__container">
          <h3>Participation</h3>
          <p>Team limit: 12 to 40 participants <br> + 3 helpers (per team)</p>
        </div>
      </div>
      <div class="majorevent__content--subheader">Rules</div>
      <div class="majorevent__content--subheader">Preliminary Video Round</div>
      <div class="majorevent__content--para">
        <ul>
          &#xb7; Duration: 3-4 min. <br>
          &#xb7; Teams have to send their respective videos to destival@oneiros.in before 11 th October, 2018
          (Wed), 11:59 PM. <br>
          &#xb7; In case the video size exceeds the mail limit, then a Google Drive Link of the video must be
          sent. <br>
          &#xb7; The following details are to be sent along with the Video: <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; Name of college <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; Name of team <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; Name and contact number of the team leader <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; List of names of team members in the video <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; List of names of team members coming for the final round <br>
          &#xb7; The members that are performing in the Video must also be a part of the final team. <br>
          &#xb7; Music tracks for preliminary and final round may be different but the routine performed in the
          prelims video<br>&nbsp; should necessarily be a part of the Final Routine. <br>
          &#xb7; Teams can choose any form of dance and music for their performance <br>&nbsp; (following the theme
          is
          not compulsory). <br>
          &#xb7; Competition is reserved only for current college students. <br>&nbsp; (Professional dancers or
          students
          from other colleges are not allowed to represent a college) <br>
          &#xb7; Late entries will not be accepted under any circumstances. <br>
          &#xb7; Decisions of the Judges will be final and binding. <br>
          &#xb7; Disregard of any rule will not be tolerated and will lead to disqualification. <br>
        </ul>
      </div>
      <div class="majorevent__content--subheader">Final Round:</div>
      <div class="majorevent__content--para">
        <ul>
          &#xb7; Duration: 8 to 10 min (10 min max.). <br>
          &#xb7; Team limit: 12 to 40 participants + 3 helpers (per team) <br>
          &#xb7; Minimum number of participants on stage at any instance during performance: 5 members <br>
          &#xb7; Maximum number of members on stage during performance: 25 members <br>
          &#xb7; Multiple Teams from a college are allowed. <br>
          &#xb7; Misbehavior or indecency with any members of committee or other teams will not be
          tolerated. <br>
          &#xb7; Misbehavior or arguing with the Judges will result in disqualification of team. <br>
          &#xb7; Teams can choose any form of dance and music for their performance (following the theme is
          not compulsory). <br>
          &#xb7; Teams are requested to bring their music tracks in at least three different devices to avoid
          technical disturbances, <br>&nbsp; Ex: - Pen drives, mobile phones (with proper required cables/cords),
          etc. <br>
          &#xb7; Entry inside the college premises will not be allowed without respective valid college/faculty
          ID cards. <br>
          &#xb7; It is compulsory for team members along with their helpers to wear their college IDs at all
          time
          when inside college premises. <br>
          &#xb7; Disregard of any rule will not be tolerated and will lead to negative marking and maybe even
          disqualification. <br>
          &#xb7; Decisions of the Judges will be final and binding. <br>
          &#xb7; Registration Fees will not be returned under any circumstances. <br>
          &#xb7; Teams must mail the list of props that they are going to use during performance, at
          destival@oneiros.in, five days prior to the event. <br>
          &#xb7; In case of any unavoidable situation, the decision of the judge &amp; the Organizing Committee
          will be final and binding. <br>
          &#xb7; Props are allowed but no additional marks will be given for their usage. <br>
          &#xb7; Exceeding time limit will lead to negative marking. <br>
          &#xb7; All the participating teams must take care of their belongings, <br>&nbsp; the Organizing team
          will not
          be
          held responsible, if anything goes missing. <br>
          &#xb7; A team won’t be allowed to view the performance of the other groups. <br>
        </ul>
      </div>
      <div class="majorevent__content--subheader">Rules for using Props:</div>
      <div class="majorevent__content--para">
        <ul>
          &#xb7; Props which can dirty or damage the stage will not be allowed. <br>&nbsp; Ex: - water, colored
          powder,
          glitter, confetti, sparks, props involving fire, etc. <br>
          &#xb7; Sharp objects or any object that require professional attention are not allowed. <br>
          &#xb7; Use of any such props will result in negative marking and might also result in
          disqualification. <br>
          &#xb7; Teams must mail the list of props that they are going to use during performance, at
          destival@oneiros.in, five days prior to the event. <br>
        </ul>
      </div>
      <div class="majorevent__content--subheader">Judging Criteria:</div>
      <div class="majorevent__content--para">
        <ul>
          &#xb7; Choreography <br>
          &#xb7; Creativity <br>
          &#xb7; Sense of space <br>
          &#xb7; Facial expressions <br>
          &#xb7; Synchronization and group formation <br>
          &#xb7; Over-all Performance <br>
        </ul>
      </div>
  `,
  kairos: `
    <div class="majorevent__content">
      <div class="majorevent__content--header">Kairos (Fashion Show)</div>
      <div class="majorevent__content--para">
        You cannot lose something which is not yours; to lose something is an illusion
        because everything you own is a mirage!
        On this note, we introduce to you, the theme of this year’s fashion show:
      </div>
      <div class="majorevent__content--header">
        ‘MIRAGE - A Vision Beyond Thoughts’
      </div>
      <div class="majorevent__content--para">
        Here is your chance to experience all the glamour and glory of the spotlight,
        register now and showcase your panache with ONEIROS’18 Fashion Show!
      </div>
      <div class="majorevent__content--details">
        <div class="majorevent__content--details__container">
          <h3>Contact</h3>
          <p><b>Nupur Agarwal </b>+91 7820808008</p>
          <p><b>Pallavi Jethoo </b>+91 9413254080</p>
        </div>
        <div class="
            majorevent__content--details__container">
          <h3>Registration Fee</h3>
          <ul>
            <li>Rs.200 per Team Member</li>
          </ul>
        </div>
        <div class="majorevent__content--details__container">
          <h3>Participation</h3>
          <p>Team limit: 12 to 15 participants <br> + 5-7 members as volunteers</p>
        </div>
      </div>

      <div class="majorevent__content--subheader">Rules & Regulations</div>
      <div class="majorevent__content--para">
        <ul>
          &#xb7; Every participant must carry his/her college id and printed
          registration receipt in absence of which entry shall <br>&nbsp; not be
          permitted including the faculty members.<br>
          &#xb7; The maximum limit of the team is 12-15 participants and 5-7 members
          as volunteers. Only 4 members of the team along with <br>&nbsp; models will
          be allowed to stay near stage.<br>
          &#xb7; Any team/participant caught using unfair means shall be
          immediately disqualified.<br>
          &#xb7; Any misbehaviour on part of the participants will lead to potential
          expulsion.<br>
          &#xb7; Any gesture/speech/idea that can be perceived as being offensive
          to any gender, sexual orientation or religious sentiments <br>&nbsp; will lead
          to immediate disqualification.<br>
          &#xb7; Kindly contact specific event coordinators for queries relating to
          number of participants, multiple entries, use of props, event fee
          etc.<br>
          &#xb7; Judges scoring shall be stand as the final result in all competitions.
          The decisions of the student council shall be binding <br>&nbsp; in case of any
          further issues.<br>

          &#xb7; Carrying the following items inside the college campus is strictly
          prohibited <br>&nbsp; and will lead to immediate expulsion and potential
          legal action: -<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; Sharp objects, inflammable objects, and/ or any other object that
          is potentially dangerous.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; Beverages with alcoholic content.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; Narcotics, drugs, cigarettes or addictive of any sort.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; Participants must report 3 hours before the event begins.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&#xb7; Makeup, props and accessories will not be provided by the home
          team.<br>
          &#xb7; 6-8 minutes will be given to each team to complete their round. If
          team exceeds the time limit, then the particular team shall <br>&nbsp; be
          disqualifying.<br>
          &#xb7; Prior to event every participating team should provide us with the
          following details:
          <br>
          &nbsp;&nbsp;&nbsp;&nbsp;1. Participants list with main coordinator’s contacts. <br>
          &nbsp;&nbsp;&nbsp;&nbsp;2. Message you are portraying.<br>
        </ul>
      </div>
      <div class="majorevent__content--subheader">Judging Criteria:</div>
      <div class="majorevent__content--para">
        <ul>
          &#xb7; Choreography <br>
          &#xb7; Props Handling <br>
          &#xb7; Theme Accuracy <br>
        </ul>
      </div>
    </div>
  `,
  requiem: `
    <div class="majorevent__content">
      <div class="majorevent__content--header">Requiem (War of Bands)</div>
      <div class="majorevent__content--para">
        Do you miss hearing the roar of the crowd as you climb on stage and
        feel the exhilarating atmosphere? Can you hear past the distorted
        guitars and growling vocals? Experience the flooding lights, hard
        hitting riffs and the thump of the bass, now that Requiem is just
        around the corner! Boasting of amazing prizes and renowned
        performers like Bloodywood, Undying Inc., Zygnema, Rudraksh, and
        The Doppler Effect, Requiem is an opportunity you cannot miss!
        Register your band now for Requiem ’18 and join the battle for
        ultimate glory and loads of exciting prizes!
      </div>
      <div class="majorevent__content--header">Euphony. Dissonance. Mosh.</div>
      <!-- <a class="majorevent__content--link" href="https://www.facebook.com/mujrequiem/">Link to Facebook Page</a> -->
      <div class="majorevent__content--details">
        <div class="majorevent__content--details__container">
          <h3>Contact</h3>
          <p><b>Mehul Gupta </b>+91 9871122154</p>
        </div>
        <div class="
            majorevent__content--details__container">
          <h3>Registration Fee</h3>
          <ul>
            <li>Rs.1500 per band</li>
          </ul>
        </div>
        <div class="majorevent__content--details__container">
          <h3>Participation</h3>
          <p>A minimum of 3 and a maximum <br>of 8 band
            members</p>
        </div>
      </div>
      <div class="majorevent__content--subheader">Performance</div>
      <div class="majorevent__content--para">
        <ul>
          &#xb7; A stage time of 25 minutes will be allotted to each band for the
          performance including the sound check. <br>&nbsp; (Time will start from
          the moment the band steps on the stage). <br>
          &#xb7; A minimum of 3 band members and a maximum of 8 band
          members should be present. <br>
          &#xb7; Exceeding the time limit will leave negative marking to the
          hands of the judges and <br>&nbsp; sound will be cut off after 27 minutes of
          stage time. <br>
          &#xb7; It is important that a band plays at least one original
          composition. <br>
          &#xb7; Use of backing tracks (with vocals or drums) and looping is not
          allowed. <br>&nbsp; (Use of samples is allowed. For more details regarding
          this, please contact the coordinators). <br>
        </ul>
      </div>
      <div class="majorevent__content--subheader">Judgement Criteria and Miscellaneous</div>
      <div class="majorevent__content--para">
        <ul>
          &#xb7; Acts will be judged based on tightness, tones, instrumental
          proficiency, vocal proficiency, stage presence, impact and ability
          to <br>&nbsp; master front of the house sound. <br>
          &#xb7; The judge’s decision is final and binding. <br>
          &#xb7; The selected bands must carry the selection acknowledgement,
          college ID and governmental proof of ID and the payment
          receipt <br>&nbsp; along with them on the day of the event. <br>
          &#xb7; Bands coming in from outside Jaipur may opt for
          accommodation in the hostel premises. <br>
          &#xb7; Registrations for the final selected bands will be done online for
          an amount of INR 1500 per band.<br>&nbsp; (Registration fee is non-
          refundable under all circumstances, including withdrawal from
          the competition.) <br>
          &#xb7; Any distasteful behaviour, use of derogatory language and/or
          damage to the stage<br>&nbsp; and any MUJ property will result in an
          automatic disqualification at the hands of management and
          judges. <br>
          &#xb7; The band is responsible for their own belongings. In case of any
          loss or damage to the band’s gear/equipment, <br>&nbsp; neither the college
          nor the event organisers will be held responsible for the same. <br>
          &#xb7; MUJ will not be held responsible for any broken equipment,
          injuries, or any other negative occurrences outside of staff’s
          control. <br>
          &#xb7; Consumption of Alcohol or any other illicit substance is strictly
          prohibited and may lead to disqualification. <br>
        </ul>
      </div>
      <div class="majorevent__content--subheader">DISCLAIMER:</div>
      <div class="majorevent__content--para">
        <p>
          Requiem holds the right to distribute the
          performances via any channel non-commercially.
        </p>
        </ul>
      </div>
    </div>
  `,
}