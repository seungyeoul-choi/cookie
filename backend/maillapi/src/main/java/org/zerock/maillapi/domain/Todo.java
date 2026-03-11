package org.zerock.maillapi.domain;

import java.time.LocalDate;

@Entity
@Table(name="tbl_todo")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    
    // GeneratedValue 사용자가 지정하지 않고 자동으로 생성되는 방식 이용
    // GenerationType.IDENTITY PK 생성 방식을 데이터베이스 쪽에서 알아서 처리
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tno;

    private String title;

    private String writer;

    private boolean complete;

    private LocalDate dueDate;
}
